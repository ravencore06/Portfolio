export const projectsData = [
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
    },
    {
        id: 'parksight',
        title: 'ParkSight',
        shortDescription: 'AI-powered Parking Intelligence & Traffic Operations Command Center to transition parking enforcement from reactive patrolling to data-driven congestion mitigation.',
        fullDescription: 'ParkSight is an AI-powered parking intelligence and traffic operations command center. It transitions municipal parking enforcement from reactive patrolling to data-driven congestion mitigation by identifying chronic parking bottlenecks. The system quantifies economic and environmental costs of traffic and parking inefficiency while optimizing patrol dispatches for municipal traffic authorities.',
        tags: ['Python', 'AI/ML', 'Data Analytics', 'Pandas', 'NumPy', 'scikit-learn'],
        features: [
            'Transitions parking enforcement from reactive patrolling to data-driven congestion mitigation by identifying chronic parking bottlenecks',
            'Quantifies economic and environmental costs while optimizing patrol dispatches for municipal traffic authorities'
        ],
        challenges: [
            'Processing noisy spatial-temporal municipal parking datasets to detect real-time bottlenecks and patterns',
            'Modeling and translating raw parking search times and idling metrics into concrete environmental and economic cost metrics'
        ],
        solutions: [
            'Designed spatial-temporal analysis and clustering scripts using Pandas and NumPy to highlight parking bottlenecks',
            'Developed simulation formulas to estimate fuel wastage, emissions, and associated economic overhead of parking search traffic'
        ],
        github: 'https://github.com/ravencore06',
        live: '#',
        featured: true
    }
];