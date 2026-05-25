export const projectsData = [
    {
        id: 'support-triage-agent',
        title: 'Support Triage Agent',
        shortDescription: 'A tri-mode AI Support Agent that uses RAG to solve customer support tickets.',
        fullDescription: 'A tri-mode AI Support Agent that uses RAG to solve customer support tickets. It automatically chooses between Claude, Gemini, or local Ollama to ensure it never goes offline, while using intelligent escalation rules to catch sensitive security and fraud cases.',
        tags: ['RAG', 'Agentic AI', 'Claude', 'Gemini', 'Ollama', 'Python'],
        features: [
            'Tri-mode fallback architecture (Claude -> Gemini -> Ollama)',
            'Retrieval-Augmented Generation (RAG) for accurate responses',
            'Intelligent escalation rules for security and fraud cases',
            '100% uptime design using local LLM fallbacks'
        ],
        challenges: [
            'Ensuring high availability of AI services during API outages',
            'Accurately identifying and escalating sensitive tickets',
            'Seamlessly switching between different LLM providers'
        ],
        solutions: [
            'Implemented a robust fallback mechanism to switch providers dynamically',
            'Developed keyword and sentiment-based escalation heuristics',
            'Created a unified abstraction layer for multiple LLM APIs'
        ],
        github: 'https://github.com/ravencore06/support-triage-agent',
        live: '#',
        featured: true
    },
    {
        id: 'swasthyakosh',
        title: 'SwasthyaKosh',
        shortDescription: 'AI-Powered Medical Prescription Management Platform',
        fullDescription: 'A secure digital platform for storing and managing medical prescriptions with encrypted data storage. It integrates AI/ML to automatically extract key medication details, detect drug interactions, and generate personalized health insights.',
        tags: ['AI/ML', 'Healthcare', 'Security', 'Web Platform'],
        features: [
            'Secure digital platform with encrypted data storage',
            'AI/ML integration for medication detail extraction',
            'Automated drug interaction detection and personalized health insights',
            'Controlled sharing mechanism for secure patient-provider communication',
            'Reduced paperwork burden and improved medication safety'
        ],
        challenges: [
            'Ensuring HIPAA-compliant data security and encryption',
            'Accurately extracting text from various prescription formats using OCR and AI',
            'Building a robust system for detecting complex drug interactions'
        ],
        solutions: [
            'Implemented state-of-the-art encryption for data at rest and in transit',
            'Utilized advanced machine learning models for accurate prescription parsing',
            'Integrated comprehensive medical databases to ensure accurate drug interaction detection'
        ],
        github: 'https://github.com/ravencore06',
        live: '#',
        featured: true
    },
    {
        id: 'visual-slam',
        title: 'Visual SLAM',
        shortDescription: 'Offline Indoor Navigation System for Visually Impaired Users',
        fullDescription: 'A privacy-preserving Progressive Web App for on-device indoor navigation without cloud dependency. It implements computer vision algorithms to detect and track key indoor landmarks in real-time, providing accessible navigation guidance.',
        tags: ['PWA', 'Computer Vision', 'Sensor Fusion', 'Accessibility'],
        features: [
            'Privacy-preserving Progressive Web App (PWA)',
            'On-device indoor navigation without cloud dependency',
            'Real-time computer vision landmark detection and tracking',
            'Integration with mobile sensor data (accelerometer, gyroscope)',
            'Audio and haptic feedback system for accessible guidance'
        ],
        challenges: [
            'Running complex computer vision models efficiently on mobile devices',
            'Achieving accurate positioning without GPS signals indoors',
            'Designing an intuitive and accessible UI/UX for visually impaired users'
        ],
        solutions: [
            'Optimized computer vision algorithms for edge computing',
            'Developed a robust sensor fusion engine combining camera and motion data',
            'Implemented a multi-modal feedback system relying on audio cues and haptics'
        ],
        github: 'https://github.com/ravencore06',
        live: '#',
        featured: true
    },
    {
        id: 'breast-cancer-prediction',
        title: 'Breast Cancer Prediction Model',
        shortDescription: 'Machine learning classification model for disease prediction and risk assessment',
        fullDescription: 'A classification model built using machine learning techniques to predict breast cancer and assess patient risk based on medical data. Evaluated using standard performance metrics.',
        tags: ['Machine Learning', 'Python', 'Data Science', 'Healthcare'],
        features: [
            'Disease prediction and risk assessment using ML techniques',
            'Comprehensive exploratory data analysis and feature engineering',
            'Rigorous model evaluation using precision, recall, F1-score, and AUC',
            'Focus on interpretability and clinical relevance'
        ],
        challenges: [
            'Handling class imbalance in medical datasets',
            'Selecting the most relevant features to prevent overfitting',
            'Ensuring high recall to minimize false negatives in medical diagnosis'
        ],
        solutions: [
            'Applied techniques like SMOTE for balancing the dataset',
            'Used feature importance analysis and cross-validation for robust feature selection',
            'Tuned hyper-parameters to optimize specifically for recall and F1-score'
        ],
        github: 'https://github.com/ravencore06',
        live: '#',
        featured: false
    }
];