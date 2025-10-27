import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
import 'package:chewie/chewie.dart';

class VideoPlayerWidget extends StatefulWidget {
  final String videoPath;
  final bool autoPlay;
  final bool looping;
  final bool showControls;
  final double? aspectRatio;
  final BoxFit fit;

  const VideoPlayerWidget({
    super.key,
    required this.videoPath,
    this.autoPlay = true,
    this.looping = true,
    this.showControls = true,
    this.aspectRatio,
    this.fit = BoxFit.cover,
  });

  @override
  State<VideoPlayerWidget> createState() => _VideoPlayerWidgetState();
}

class _VideoPlayerWidgetState extends State<VideoPlayerWidget> {
  late VideoPlayerController _videoPlayerController;
  ChewieController? _chewieController;
  bool _isInitialized = false;

  @override
  void initState() {
    super.initState();
    _initializeVideo();
  }

  Future<void> _initializeVideo() async {
    try {
      _videoPlayerController = VideoPlayerController.asset(widget.videoPath);
      await _videoPlayerController.initialize();

      if (mounted) {
        setState(() {
          _isInitialized = true;
        });

        if (widget.autoPlay) {
          _videoPlayerController.play();
        }

        if (widget.showControls) {
          _chewieController = ChewieController(
            videoPlayerController: _videoPlayerController,
            autoPlay: widget.autoPlay,
            looping: widget.looping,
            showControls: widget.showControls,
            aspectRatio: widget.aspectRatio,
            autoInitialize: true,
          );
        }
      }
    } catch (e) {
      debugPrint('Error initializing video: $e');
    }
  }

  @override
  void dispose() {
    _videoPlayerController.dispose();
    _chewieController?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (!_isInitialized) {
      return Container(
        decoration: BoxDecoration(
          color: Colors.grey[300],
          borderRadius: BorderRadius.circular(8),
        ),
        child: const Center(child: CircularProgressIndicator()),
      );
    }

    if (widget.showControls && _chewieController != null) {
      return Chewie(controller: _chewieController!);
    }

    return AspectRatio(
      aspectRatio:
          widget.aspectRatio ?? _videoPlayerController.value.aspectRatio,
      child: VideoPlayer(_videoPlayerController),
    );
  }
}

class BackgroundVideoPlayer extends StatelessWidget {
  final String videoPath;
  final Widget child;
  final double opacity;

  const BackgroundVideoPlayer({
    super.key,
    required this.videoPath,
    required this.child,
    this.opacity = 0.7,
  });

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // Background video
        Positioned.fill(
          child: VideoPlayerWidget(
            videoPath: videoPath,
            autoPlay: true,
            looping: true,
            showControls: false,
            fit: BoxFit.cover,
          ),
        ),
        // Dark overlay
        Positioned.fill(
          child: Container(color: Colors.black.withOpacity(opacity)),
        ),
        // Content
        child,
      ],
    );
  }
}
