import 'package:cloud_firestore/cloud_firestore.dart';

class ProjectRequest {
  final String? id;
  final String name;
  final String email;
  final String message;
  final String company;
  final String phone;
  final String serviceInterest;
  final DateTime timestamp;
  final String status;
  final String priority;

  ProjectRequest({
    this.id,
    required this.name,
    required this.email,
    required this.message,
    this.company = '',
    this.phone = '',
    this.serviceInterest = '',
    required this.timestamp,
    this.status = 'new',
    this.priority = 'medium',
  });

  // Convert from Firestore document
  factory ProjectRequest.fromFirestore(DocumentSnapshot doc) {
    Map<String, dynamic> data = doc.data() as Map<String, dynamic>;

    return ProjectRequest(
      id: doc.id,
      name: data['name'] ?? '',
      email: data['email'] ?? '',
      message: data['message'] ?? '',
      company: data['company'] ?? '',
      phone: data['phone'] ?? '',
      serviceInterest: data['serviceInterest'] ?? '',
      timestamp: (data['timestamp'] as Timestamp?)?.toDate() ?? DateTime.now(),
      status: data['status'] ?? 'new',
      priority: data['priority'] ?? 'medium',
    );
  }

  // Convert to Firestore document
  Map<String, dynamic> toFirestore() {
    return {
      'name': name,
      'email': email,
      'message': message,
      'company': company,
      'phone': phone,
      'serviceInterest': serviceInterest,
      'timestamp': Timestamp.fromDate(timestamp),
      'status': status,
      'priority': priority,
    };
  }

  // Create a copy with updated fields
  ProjectRequest copyWith({
    String? id,
    String? name,
    String? email,
    String? message,
    String? company,
    String? phone,
    String? serviceInterest,
    DateTime? timestamp,
    String? status,
    String? priority,
  }) {
    return ProjectRequest(
      id: id ?? this.id,
      name: name ?? this.name,
      email: email ?? this.email,
      message: message ?? this.message,
      company: company ?? this.company,
      phone: phone ?? this.phone,
      serviceInterest: serviceInterest ?? this.serviceInterest,
      timestamp: timestamp ?? this.timestamp,
      status: status ?? this.status,
      priority: priority ?? this.priority,
    );
  }

  @override
  String toString() {
    return 'ProjectRequest(id: $id, name: $name, email: $email, message: $message, company: $company, phone: $phone, serviceInterest: $serviceInterest, timestamp: $timestamp, status: $status, priority: $priority)';
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is ProjectRequest &&
        other.id == id &&
        other.name == name &&
        other.email == email &&
        other.message == message &&
        other.company == company &&
        other.phone == phone &&
        other.serviceInterest == serviceInterest &&
        other.timestamp == timestamp &&
        other.status == status &&
        other.priority == priority;
  }

  @override
  int get hashCode {
    return Object.hash(
      id,
      name,
      email,
      message,
      company,
      phone,
      serviceInterest,
      timestamp,
      status,
      priority,
    );
  }
}
