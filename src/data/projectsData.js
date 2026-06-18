export const projectsData = [
    {
        id: 'growthos',
        title: 'GrowthOS',
        shortDescription: 'Building a unified AI-powered dashboard for creators and businesses to generate content, optimise captions, detect trends, schedule posts, and track analytics across Instagram, LinkedIn, and YouTube.',
        fullDescription: 'GrowthOS is an AI-powered social media management and creator tool in active development. It provides creators and businesses with a unified dashboard to generate content, optimize captions using context-aware AI models, detect trends, schedule posts, and track analytics across Instagram, LinkedIn, and YouTube. Built with a modular analytics layer, it leverages OpenAI\'s API and handles cross-platform post management using platform-specific API connectors, deployed end-to-end on Vercel.',
        tags: ['Python', 'React', 'Node.js', 'OpenAI API', 'REST APIs', 'PostgreSQL', 'Vercel'],
        features: [
            'Unified AI-powered dashboard for creator workflows',
            'Context-aware caption generation and trend analysis using OpenAI API',
            'Scheduling engine with platform-specific API connectors for cross-platform posting',
            'Modular analytics layer to surface actionable engagement insights'
        ],
        challenges: [
            'Interfacing with diverse, rate-limited, and complex APIs for Instagram, LinkedIn, and YouTube',
            'Aggregating engagement analytics dynamically into a modular database layer'
        ],
        solutions: [
            'Created a modular middleware wrapper handling token refreshes, rate limits, and request pooling',
            'Designed an optimized PostgreSQL schema with timeseries support for performant analytics querying'
        ],
        github: 'https://github.com/ravencore06',
        live: '#',
        featured: true
    },
    {
        id: 'support-triage-agent',
        title: 'Support Triage Agent',
        shortDescription: 'Production-grade AI agent triaging customer support tickets via a 9-layer RAG pipeline - 100% processing success across 29 tickets, 85-90% estimated accuracy.',
        fullDescription: 'A production-grade AI support triage agent that handles customer support tickets via a 9-layer Retrieval-Augmented Generation (RAG) pipeline. Features a tri-mode LLM fallback system (OpenRouter -> Gemini 2.0 Flash -> local Ollama) using exponential backoff, checkpoint/resume, and intelligent escalation. Completely standalone with zero vector DB dependency, achieving 100% processing success on test datasets with 85-90% accuracy.',
        tags: ['Python', 'RAG', 'Gemini 2.0 Flash', 'Claude', 'Ollama', 'OpenRouter'],
        features: [
            '9-layer RAG pipeline for customer ticket processing and routing',
            'Tri-mode LLM fallback (OpenRouter -> Gemini 2.0 Flash -> local Ollama) for 100% uptime',
            'Exponential backoff, checkpoint/resume, and intelligent escalation flow',
            'Independent, zero vector DB dependency design for lighter deployment'
        ],
        challenges: [
            'Ensuring processing consistency and resuming state during mid-execution network or API drops',
            'Maintaining high triage accuracy without the overhead of a dedicated vector database'
        ],
        solutions: [
            'Built a local state-file checkpoints manager to enable execution resume and exponential backoffs',
            'Designed a lightweight semantic lookup engine using on-device JSON index mappings and standard embedding similarity calculations'
        ],
        github: 'https://github.com/ravencore06/support-triage-agent',
        live: '#',
        featured: true
    },
    {
        id: 'visual-slam',
        title: 'Visual SLAM — GPS-Free Indoor Navigation',
        shortDescription: 'Offline indoor navigation using on-device computer vision and mobile sensors for landmark detection without GPS; SLAM algorithms with ROS2 for real-time localisation.',
        fullDescription: 'An offline indoor navigation system designed for GPS-deprived environments. It runs computer vision landmark detection and mobile sensor fusion (accelerometer, gyroscope) completely on-device. Leveraging SLAM algorithms with ROS2 (in progress) for real-time localization, it delivers privacy-preserving audio and haptic guidance via a Progressive Web App (PWA).',
        tags: ['Python', 'ROS2', 'OpenCV', 'PWA', 'Robotics', 'Computer Vision'],
        features: [
            'Offline on-device landmark detection using computer vision without cloud dependency',
            'Real-time localization using SLAM algorithms integrated with ROS2',
            'Sensor fusion combining camera streams with mobile accelerometer and gyroscope data',
            'Privacy-preserving Progressive Web App (PWA) with audio and haptic guidance'
        ],
        challenges: [
            'Porting resource-intensive SLAM and computer vision models to execute smoothly on edge/mobile devices',
            'Integrating ROS2 nodes with web applications for real-time sensor sharing'
        ],
        solutions: [
            'Implemented WebAssembly (Wasm) compile-steps for core OpenCV functions to maximize mobile browser performance',
            'Configured a lightweight WebSocket-based bridge between local ROS2 nodes and the PWA frontend'
        ],
        github: 'https://github.com/ravencore06',
        live: '#',
        featured: true
    }
];