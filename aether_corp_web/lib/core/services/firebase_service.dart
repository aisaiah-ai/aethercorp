import 'package:cloud_firestore/cloud_firestore.dart';

class FirebaseService {
  static final FirebaseFirestore _firestore = FirebaseFirestore.instance;

  // Collection reference for project requests
  static const String _projectRequestsCollection = 'project_requests';

  /// Submit a project request to Firebase
  static Future<bool> submitProjectRequest({
    required String name,
    required String email,
    required String message,
    String? company,
    String? phone,
    String? serviceInterest,
  }) async {
    try {
      // Create the project request document
      final projectRequest = {
        'name': name,
        'email': email,
        'message': message,
        'company': company ?? '',
        'phone': phone ?? '',
        'serviceInterest': serviceInterest ?? '',
        'timestamp': FieldValue.serverTimestamp(),
        'status': 'new', // new, contacted, in_progress, completed
        'priority': 'medium', // low, medium, high
      };

      // Add document to Firestore
      await _firestore
          .collection(_projectRequestsCollection)
          .add(projectRequest);

      return true;
    } catch (e) {
      print('Error submitting project request: $e');
      return false;
    }
  }

  /// Get all project requests (for admin use)
  static Stream<QuerySnapshot> getProjectRequests() {
    return _firestore
        .collection(_projectRequestsCollection)
        .orderBy('timestamp', descending: true)
        .snapshots();
  }

  /// Update project request status (for admin use)
  static Future<bool> updateProjectRequestStatus({
    required String documentId,
    required String status,
  }) async {
    try {
      await _firestore
          .collection(_projectRequestsCollection)
          .doc(documentId)
          .update({'status': status});
      return true;
    } catch (e) {
      print('Error updating project request status: $e');
      return false;
    }
  }

  /// Get project request by ID
  static Future<DocumentSnapshot?> getProjectRequest(String documentId) async {
    try {
      return await _firestore
          .collection(_projectRequestsCollection)
          .doc(documentId)
          .get();
    } catch (e) {
      print('Error getting project request: $e');
      return null;
    }
  }

  /// Delete project request (for admin use)
  static Future<bool> deleteProjectRequest(String documentId) async {
    try {
      await _firestore
          .collection(_projectRequestsCollection)
          .doc(documentId)
          .delete();
      return true;
    } catch (e) {
      print('Error deleting project request: $e');
      return false;
    }
  }

  /// Get project requests by status
  static Stream<QuerySnapshot> getProjectRequestsByStatus(String status) {
    return _firestore
        .collection(_projectRequestsCollection)
        .where('status', isEqualTo: status)
        .orderBy('timestamp', descending: true)
        .snapshots();
  }

  /// Get project requests count by status
  static Future<int> getProjectRequestsCountByStatus(String status) async {
    try {
      final querySnapshot = await _firestore
          .collection(_projectRequestsCollection)
          .where('status', isEqualTo: status)
          .get();
      return querySnapshot.docs.length;
    } catch (e) {
      print('Error getting project requests count: $e');
      return 0;
    }
  }

  /// Get total project requests count
  static Future<int> getTotalProjectRequestsCount() async {
    try {
      final querySnapshot = await _firestore
          .collection(_projectRequestsCollection)
          .get();
      return querySnapshot.docs.length;
    } catch (e) {
      print('Error getting total project requests count: $e');
      return 0;
    }
  }
}
