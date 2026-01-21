import { Cpu, Music, Mic, Camera, Briefcase, Gamepad2 } from 'lucide-react';

export const eventsData = [
    {
        id: 'technoman-ai',
        title: 'TECHNOMAN-AI',
        slug: 'technoman-ai',
        tagline: 'Where Code Meets Consciousness',
        description: 'The flagship technical cluster of ROBOMAN AI 2026. Dive into the world of algorithms, circuits, and blueprints. Whether you are a coder, a maker, or a designer, this is your arena to prove your mettle.',
        icon: <Cpu size={40} className="text-neon-blue" />,
        color: 'neon-blue',
        gradient: 'from-blue-600 to-cyan-500',
        subEvents: [
            { name: 'Vibe Code Hackathon', desc: '24-hour coding marathon to solve real-world problems.' },
            { name: 'Circuit Buzz', desc: 'Design and debug complex electronic circuits against time.' },
            { name: 'Robo Race', desc: 'Navigate your bot through an obstacle-filled track.' },
            { name: 'Robo Soccer', desc: 'Score goals with your custom-built robots.' },
            { name: 'AutoCAD Arena', desc: 'Showcase your architectural and design precision.' }
        ],
        rulebook: {
            venue: 'GGI Campus',
            generalRules: [
                'Registration before deadline is mandatory.',
                'Teams must follow event-specific team size limits.',
                'Fair play is compulsory; cheating leads to disqualification.',
                'Judges’ and organizers’ decisions are final.',
                'Organizers may modify rules under critical conditions.',
                'Winners receive cash prizes and certificates.'
            ],
            sections: [
                {
                    title: 'CIRCUIT BUZZ',
                    location: 'Block-A, A-126, BEE Lab (First Floor)',
                    format: ['Timings: 10:00 AM – 2:00 PM', 'Team Size: Max 4 members'],
                    rules: [
                        'Rounds: Conceptual Circuit Design, Simulation/Implementation, Final Testing & Presentation',
                        'Circuit must be designed during the event.',
                        'Pre-built or copied designs are prohibited.',
                        'Participants must bring required tools unless provided.',
                        'Judging Criteria (20 pts each): Design Accuracy, Innovation, Functionality, Efficiency, Presentation'
                    ]
                },
                {
                    title: 'AUTOCAD ARENA',
                    location: 'Block-A, LAB-110',
                    format: ['Timings: 10:00 AM – 2:00 PM', 'Participation: Individual or team of max 2'],
                    rules: [
                        'Only AutoCAD software allowed.',
                        'Plagiarism or templates not allowed.',
                        'Rounds: Basic design task, Final complex design task.'
                    ]
                },
                {
                    title: 'ROBO SOCCER',
                    location: 'GGI Campus (Adjacent to Badminton Court)',
                    format: ['Team Size: Max 3 students', 'Match Duration: 7 minutes'],
                    rules: [
                        'Robot Size: Max 30x30x30 cm',
                        'Max Weight: 4 kg (excluding battery & controller)',
                        'Max Voltage: 12V',
                        'Wired or wireless operation allowed',
                        'LEGO kits not allowed',
                        'Ball must remain outside robot (2/3rd visible)',
                        'Knockout format, Penalty shootout if tie'
                    ]
                },
                {
                    title: 'ROBO RACE',
                    location: 'GGI Campus (Adjacent to Badminton Court)',
                    format: ['Team Size: Max 4 participants'],
                    rules: [
                        'Robot Size: Max 30x30x30 cm',
                        'Max Weight: 5 kg (including battery)',
                        'Max Power: 12V onboard',
                        'Autonomous robot must cross hurdles',
                        'Time-based competition',
                        'Penalties for fouls'
                    ]
                }
            ],
            coordinators: {
                teachers: [
                    { name: 'Er. Kulwinder Singh', phone: '98762-24818' },
                    { name: 'Er. Ashish Bhateja', phone: '94177-32687' }
                ],
                students: [
                    { name: 'Mr. Satya Narayan', phone: '62392-01097' },
                    { name: 'Mr. Abhishek Choudhery', phone: '98888-68571' }
                ]
            }
        },
        registrationLinks: [
            { label: 'Register for TECHNOMAN-AI', url: 'https://forms.gle/wwAACmupyAqiaabr7' },
            { label: 'Register for Vibe Code Hackathon', url: 'https://docs.google.com/forms/d/1lPhSz2yFG2ClvtLayDnfj9eJ200M0hssZNTBieHDfWQ/edit' }
        ]
    },
    {
        id: 'arts-and-ai',
        title: 'ARTS AND AI',
        slug: 'arts-and-ai',
        tagline: 'Harmonizing Creativity with Intelligence',
        description: 'Explore the intersection of human creativity and artificial intelligence. From generating music to digital art, witness how AI amplifies artistic expression.',
        icon: <Music size={40} className="text-neon-purple" />,
        color: 'neon-purple',
        gradient: 'from-purple-600 to-pink-500',
        subEvents: [
            { name: 'Gen AI Music Generation', desc: 'Create original compositions using AI tools.' },
            { name: 'Open Live Stage', desc: 'Open mic for poets, storytellers, and musicians.' }
        ],
        rulebook: {
            venue: 'Gulzar Group of Institutions',
            generalRules: [
                'Event conducted on both Day 1 & Day 2',
                'Judges’ decisions are final',
                'Discipline and decorum must be maintained',
                'Participants will be disqualified if offensive content is used or time limit is exceeded.'
            ],
            sections: [
                {
                    title: 'AI MUSIC GENERATION (USING SUNO AI)',
                    format: ['Theme: Fusion of AI and Music', 'Powered By: Suno AI', 'Days: Day 1 & Day 2'],
                    rules: [
                        'Solo or Group participation (2–4 members)',
                        'Only Suno AI allowed for music generation',
                        'Song duration: 30 seconds to 2 minutes',
                        'Song must be original and AI-generated',
                        'Basic editing (cut/trim) allowed',
                        'No copyrighted lyrics or copied prompts',
                        'Content must be clean and family-friendly',
                        'Judged on Quality, Expression, Originality, and Audience impact',
                        'Winning songs played on Main Stage'
                    ],
                    prizes: ['One winner selected per genre (Romantic, Motivational, Pop)']
                },
                {
                    title: 'OPEN MIC STAGE',
                    format: ['Performances: Singing, Poetry, Shayari, Rap', 'Non-competitive appreciation event'],
                    rules: [
                        'Time limit: 2–3 minutes',
                        'Solo or Group (2–4 members)',
                        'Language: Open',
                        'Background music allowed (optional)',
                        'Content must be respectful',
                        'Political or abusive content strictly prohibited',
                        'Selected performers may perform on Main Stage'
                    ]
                }
            ],
            coordinators: {
                teachers: [
                    { name: 'Amitoj Kaur', phone: '7889057977' }
                ],
                students: [
                    { name: 'Vanshika', phone: '7009915609' },
                    { name: 'Gargi Jain', phone: '7901784719' }
                ]
            }
        },
        registrationLinks: [
            { label: 'Register for Arts & AI (Music Kona)', url: 'https://forms.gle/455Z9tx3aFDNzkqY8' }
        ]
    },
    {
        id: 'cultural-mela',
        title: 'CULTURAL MELA',
        slug: 'cultural-mela',
        tagline: 'Celebrating Diversity and Rhythm',
        description: 'A vibrant celebration of dance, music, and comedy. Unleash your inner performer and captivate the audience with your talent.',
        icon: <Mic size={40} className="text-pink-500" />,
        color: 'pink-500',
        gradient: 'from-pink-500 to-red-500',
        subEvents: [
            { name: 'Dance Competition', desc: 'Solo and group dance battles.' },
            { name: 'Singing', desc: 'Voice of the fest - Classical, Pop, and Folk.' },
            { name: 'Battle of Bands', desc: 'Rock out with your college band.' },
            { name: 'Stand-up Comedy', desc: 'Make the crowd roar with laughter.' }
        ],
        rulebook: {
            venue: 'Main Stage, GGI Campus',
            generalRules: [
                'Cultural performances are for entertainment only. No competition or prizes.',
                'Registration is mandatory via official Google Form.',
                'On-spot registrations are NOT allowed.',
                'College / School ID card is compulsory.',
                'Inappropriate language, gestures, or content is strictly prohibited.',
                'Organizing team may adjust performance slots. Decisions are final.',
                'Certificates issued only to participants who perform on stage.'
            ],
            sections: [
                {
                    title: 'MUSIC PERFORMANCES',
                    format: ['Categories: Solo Singing, Group Singing, Shabad / Qawwali, Band Performance'],
                    rules: [
                        'Solo Duration: 2–4 minutes',
                        'Group Duration: 3–5 minutes',
                        'Bring your own audio track (MP3 format)',
                        'Lyrics must be decent and college-appropriate',
                        'Live instruments allowed with prior intimation'
                    ]
                },
                {
                    title: 'DANCE PERFORMANCES',
                    format: ['Categories: Solo Dance, Group Dance, Dance Face-Off'],
                    rules: [
                        'Solo Duration: 3–4 minutes',
                        'Group Duration: 3–5 minutes',
                        'Props allowed but must be handled safely',
                        'Fire, sharp, or dangerous props are NOT allowed'
                    ]
                },
                {
                    title: 'THEATRE PERFORMANCES',
                    format: ['Categories: Skit, Mime, Stand-up Comedy'],
                    rules: [
                        'Duration: 6–10 minutes (including setup)',
                        'Content should be creative, social, or informative',
                        'Political, religious, or offensive themes are NOT allowed',
                        'Minimal props recommended'
                    ]
                },
                {
                    title: 'PERFORMANCE & SLOT GUIDELINES',
                    rules: [
                        'Performance slots assigned by organizing team',
                        'Preferred slot requests may not be guaranteed',
                        'Performances must strictly follow allotted time',
                        'Team member changes must be informed in advance'
                    ]
                }
            ],
            coordinators: {
                teachers: [
                    { name: 'Neeru Ma’am', phone: '98153 27276' }
                ],
                students: [
                    { name: 'Abhishek Pandey', phone: '75290 61349' },
                    { name: 'Priyanshu Harsh', phone: '6299461959' }
                ]
            }
        },
        registrationLinks: [
            { label: 'Register for Cultural Mela', url: 'https://docs.google.com/forms/d/e/1FAIpQLSeZD6lmxSP-Zr4vlU5IfhOkfucrgzY4nAxSvyFZLTjSFxg31g/viewform' }
        ]
    },
    {
        id: 'cretoman-ai',
        title: 'CRETOMAN-AI',
        slug: 'cretoman-ai',
        tagline: 'Capturing Moments, Creating Stories',
        description: 'For the visual storytellers. Whether through a lens or a short film, show us your unique perspective of the world and the fest.',
        icon: <Camera size={40} className="text-yellow-400" />,
        color: 'yellow-400',
        gradient: 'from-yellow-400 to-orange-500',
        subEvents: [
            { name: 'Reel Making', desc: 'Capture the best moments of ROBOMAN AI 2026.' },
            { name: 'Short Film', desc: 'Tell a compelling story in under 10 minutes.' },
            { name: 'On-the-Spot Photography', desc: 'Theme-based photography challenge.' }
        ],
        rulebook: {
            venue: 'Gulzar Group of Institutions',
            generalRules: [],
            sections: [
                {
                    title: 'PHOTOGRAPHY COMPETITION',
                    location: 'Event Name: Catch The Glimpse',
                    format: ['Theme: Robomania', 'Participation: Individual', 'Time Duration: 2 hours'],
                    rules: [
                        'Maximum 3 photographs per participant',
                        'Original content only (no copyright violation)',
                        'Photographs must match the theme',
                        'Raw files must be submitted',
                        'Editing is NOT allowed',
                        'No hateful, political, religious, or adult content',
                        'Participation certificates provided',
                        'Judges’ decision will be final'
                    ],
                    coordinators: [
                        { name: 'Ms. Anjali Gupta', phone: '7986693522', email: 'anjali.gupta@ggi.ac.in' }
                    ]
                },
                {
                    title: 'INSTA REELS COMPETITION',
                    format: ['Team: Individual or group (up to 5)', 'Time Duration: 2 hours', 'One entry per group'],
                    rules: [
                        'Reel length: 30–60 seconds',
                        'Aspect ratio: 9:16',
                        'Language: Hindi / English / Punjabi / No language',
                        'Caption: Max 140 characters',
                        'Content must be original and theme-based',
                        'No adult, hateful, or political content',
                        'Participation certificates provided',
                        'Judges’ decision final'
                    ],
                    coordinators: [
                        { name: 'Ms. Garima Tripathi', phone: '7889257421', email: 'garima.tripathi@ggi.ac.in' }
                    ]
                },
                {
                    title: 'MOBILE PHONE FILMMAKING',
                    format: ['Theme: Cover Robomania event', 'Time Duration: 2.5 hours'],
                    rules: [
                        'Film length: 1–2.5 minutes (including credits)',
                        'Shot ONLY on mobile phone',
                        'Edited using mobile apps only',
                        'Original and audience-appropriate content',
                        'Participants must own film rights',
                        'Organizers may promote films',
                        'Rule violation may cause disqualification',
                        'Judges’ decision final'
                    ],
                    coordinators: [
                        { name: 'Ms. Radhika', phone: '9877024266', email: 'radhika@ggi.ac.in' }
                    ]
                }
            ],
            coordinators: {
                teachers: [
                    { name: 'Ms. Anjali Gupta', phone: '7986693522' },
                    { name: 'Ms. Garima Tripathi', phone: '7889257421' },
                    { name: 'Ms. Radhika', phone: '9877024266' }
                ],
                students: []
            }
        },
        registrationLinks: [
            { label: 'Register for CRETOMAN-AI', url: 'https://forms.gle/8ZzwgTUex9Q4MoKR8' }
        ]
    },
    {
        id: 'businessman-ai',
        title: 'BUSINESSMAN-AI',
        slug: 'businessman-ai',
        tagline: 'Innovate. Strategize. Conquer.',
        description: 'Test your business acumen and marketing skills. From pitching ideas to solving crisis situations, this is for the future CEOs.',
        icon: <Briefcase size={40} className="text-neon-green" />,
        color: 'neon-green',
        gradient: 'from-green-500 to-emerald-600',
        subEvents: [
            { name: 'The Genai "Prompt-Off" (Product Launch Edition)', desc: 'AI-driven product launch challenge.' },
            { name: 'Influencer "Brand-Wash" (The Pr Rescue)', desc: 'Crisis management and PR rescue strategy.' },
            { name: 'The "Deadpool" Market Analysis', desc: 'Unconventional market analysis challenge.' },
            { name: 'Marketing Mania/Brand Wars', desc: 'Ultimate battle of brands and marketing strategies.' },
            { name: 'AI AD-MAD SHOW', desc: 'Create compelling advertisements using AI tools.' },
            { name: 'Mystery Case Hack', desc: 'Solve complex business case studies.' },
            { name: 'Business Escape Room', desc: 'Solve corporate puzzles to escape in time.' },
            { name: 'Fail Fast Challenge', desc: 'Pivot your failed startup idea to success.' },
            { name: 'Reverse Pitch Challenge', desc: 'Critique and improve existing business models.' }
        ],
        rulebook: {
            venue: 'Gulzar Group of Institutions',
            generalRules: [
                'Cross-college teams allowed.',
                'Multiple teams per college allowed.',
                'One participant can join only one team.',
                'Plagiarism, offensive content, or rule violation leads to disqualification.'
            ],
            sections: [
                {
                    title: 'GENAI PROMPT-OFF (PRODUCT LAUNCH EDITION)',
                    format: ['Team Size: 2–3 members', 'Duration: 90 minutes'],
                    rules: [
                        'Create a new product brand using AI.',
                        'Allowed AI tools: ChatGPT / Gemini, Midjourney / DALL·E / Leonardo, Suno (optional).',
                        'Final deliverable: 1.5-minute elevator pitch.',
                        'Judging Criteria: Creativity & Innovation (30%), Prompt Quality & AI Usage (30%), Market Relevance (20%), Presentation (20%).'
                    ]
                },
                {
                    title: 'INFLUENCER “BRAND-WASH” (PR RESCUE)',
                    format: ['Challenge: Crisis management & brand recovery'],
                    rules: [
                        'Teams design a recovery strategy for a fictional brand/influencer.',
                        'Focus on ethical PR, tone control, and narrative intelligence.',
                        'Judging Focus: Crisis understanding, Ethical clarity, Platform-specific messaging, Long-term reputation plan.'
                    ]
                },
                {
                    title: '“DEADPOOL” MARKET ANALYSIS',
                    rules: [
                        'Predict the next big business failure.',
                        'Analyze hidden risks behind successful companies.',
                        'Data-driven contrarian thinking.'
                    ]
                },
                {
                    title: 'MARKETING MANIA / BRAND WARS',
                    format: ['Rounds: Brand Relaunch, Guerrilla Marketing, Crisis Communication'],
                    rules: [
                        'Focus on feasibility, strategy, and creativity under constraints.'
                    ]
                },
                {
                    title: 'AD-MAD SHOW',
                    format: ['Live advertisement performance (3–5 minutes)'],
                    rules: [
                        'Formats: Comedy / Emotional / Musical / Celebrity parody.',
                        'Props & costumes allowed.'
                    ]
                },
                {
                    title: 'MYSTERY CASE HACK',
                    rules: [
                        'Surprise business case revealed on spot.',
                        'No prior preparation allowed.',
                        'Tests adaptability and structured thinking.'
                    ]
                },
                {
                    title: 'BUSINESS ESCAPE ROOM',
                    rules: [
                        'Puzzle-based business strategy challenge.',
                        'Solve finance, marketing, and logic puzzles.',
                        'Team collaboration mandatory.'
                    ]
                },
                {
                    title: 'FAIL FAST CHALLENGE',
                    rules: [
                        'Stress-test startup ideas to expose failures.',
                        'Learning > defending ideas.',
                        'Judges evaluate depth of failure analysis.'
                    ]
                },
                {
                    title: 'REVERSE PITCH CHALLENGE',
                    format: ['Problem-first innovation challenge'],
                    rules: [
                        'Teams design solutions for real-world problems.',
                        'Focus on feasibility, scalability, and impact.'
                    ]
                }
            ],
            coordinators: {
                teachers: [
                    { name: 'Pankaj sir', phone: '94171 62285' }
                ],
                students: [
                    { name: 'Manjeet', phone: '62077 82543' }
                ]
            }
        },
        registrationLinks: [
            { label: 'Register for BUSINESSMAN-AI', url: 'https://docs.google.com/forms/d/1RhiO811XCxuj44qdmT-uEeyzMyJYzVT1cISPQ_iFpMQ/previewResponse' }
        ]
    },
    {
        id: 'project-expo',
        title: 'PROJECT EXPO',
        slug: 'project-expo',
        tagline: 'Innovate. Build. Inspire.',
        description: 'Showcase of the most innovative AI and Robotics projects. A platform for young innovators to present working models and advanced prototypes.',
        icon: <Cpu size={40} className="text-orange-500" />,
        color: 'orange-500',
        gradient: 'from-orange-500 to-red-500',
        subEvents: [
            { name: 'Technical Project Display', desc: 'Working models in AI, Robotics, and Emerging Tech.' }
        ],
        rulebook: {
            venue: 'Gulzar Group of Institutions',
            generalRules: [
                'Registration is mandatory via the official Google Form.',
                'Deadline: 15th February 2026 (4:30 PM).',
                'Late entries will not be accepted.',
                'Shortlisted teams will be informed via email on 16th Feb 2026.',
                'Judges’ decisions are final and binding.',
                'Strict adherence to the event theme is mandatory.',
                'Any unfair practice will result in disqualification.'
            ],
            sections: [
                {
                    title: 'PROJECT REQUIREMENTS',
                    format: ['Team Size: 1–4 members', 'Time: 9:00 AM – 1:00 PM'],
                    rules: [
                        'Must be a working model OR detailed functional prototype.',
                        'Project must be self-contained.',
                        'Power supply will be provided.',
                        'Short presentation required (5–7 minutes).'
                    ]
                },
                {
                    title: 'ELIGIBILITY',
                    rules: [
                        'School Students (Class 10 onwards): Medical, Non-Medical, Commerce, Arts',
                        'Engineering Students',
                        'Diploma Students',
                        'Allied Health Sciences',
                        'Professional Studies'
                    ]
                },
                {
                    title: 'CODE OF CONDUCT',
                    rules: [
                        'Maintain discipline and professionalism.',
                        'Respect judges, organizers, and fellow participants.',
                        'Any misconduct may lead to removal from the event.'
                    ]
                }
            ],
            coordinators: {
                teachers: [
                    { name: 'Ashish Bhateja', phone: '9417732687' }
                ],
                students: [
                    { name: 'Satya Narayan', phone: '6239201097' }
                ]
            }
        },
        registrationLinks: [
            { label: 'Register for Project Expo', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdDLlDsF6E1rbolfcKaoFu1QQX9IkmxQkDajYWOiuRmtt2C0w/viewform' }
        ]
    },
    {
        id: 'games',
        title: 'GAMES',
        slug: 'games',
        tagline: 'Level Up Your Game',
        description: 'The ultimate battleground for gamers. From strategic board games to high-octane e-sports, claim your victory.',
        icon: <Gamepad2 size={40} className="text-red-500" />,
        color: 'red-500',
        gradient: 'from-red-600 to-orange-600',
        subEvents: [
            { name: 'BGMI Contest', desc: 'Squad battle royale.' }
        ],
        rules: [
            'Fair play is mandatory. Cheating leads to immediate ban.',
            'Bring your own peripherals for e-sports (optional).',
            'Referees decision is final.',
            'Standard tournament rules apply.'
        ],
        rulebook: {
            venue: 'Gulzar Group of Institutions',
            gameLocation: 'B Block',
            registrationType: 'Online',
            generalRules: [
                'All participants must complete online registration before the event.',
                'Participants must carry their College ID card.',
                'Reporting on time is mandatory. Late arrival may result in walkover or disqualification.',
                'Any misbehavior, abuse, or cheating will lead to immediate disqualification.',
                'The decision of the organizing committee and referees will be final and binding.',
                'Organizers reserve the right to modify rules due to unavoidable circumstances.'
            ],
            sections: [
                {
                    title: 'BGMI TOURNAMENT',
                    location: 'B Block – Top Floor – Seminar Hall',
                    format: ['Mode: Squad', 'Match Type: Classic'],
                    rules: [
                        'Only mobile devices are allowed.',
                        'Emulators are strictly prohibited.',
                        'Hacks, cheats, or unfair means will result in direct disqualification.',
                        'Players must join rooms on time using organizer-shared details.',
                        'Internet and device management are the player’s responsibility.'
                    ],
                    prizes: ['Winner team will receive a Winner Trophy.', 'Scoring and ranking system will be explained before the match.']
                }
            ],
            coordinators: {
                teachers: [
                    { name: 'Sitanshu Sir', phone: '8699503439' },
                    { name: 'JP Sir', phone: '8427203511' }
                ],
                students: [
                    { name: 'Adarsh Kumar', phone: '6239985465' }
                ]
            }
        },
        registrationLinks: [
            { label: 'Register for BGMI', url: 'https://docs.google.com/forms/d/1Q6SZjjzqJZ9YribU6WyNaR3CdP7-sKE_IRYY9zTIuMc/preview' }
        ]
    }
];
