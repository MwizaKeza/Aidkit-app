const firstAidData = [
    {
      id: 1,
      title: "The 'Three P's",
      image: require('../assets/imgs/1158436_2210.jpg'),
      instructionImage: require('../assets/imgs/1158436_2210.jpg'),
      steps: [
        'This course is not a replacement for a practical first aid course. Try sources like efa@rwandaredcross.org to sign up for in-person classes.',
        'Preserve: Your aim is to carry out emergency first aid procedures. This includes your own life. Make sure you asses the victim and any potential danger to yourself or bystanders before you approach the scene.',
        'Prevent: Prevent any further injuries (e.g. Keeping someone with a broken limb still.)',
        'Promote: Promote recovery by reducing the impact of the inury before help reaches the scene (e.g. Cool a burn before the likelihood of it getting worse by the time help arrives.) ',
      ],

      questions: [
        {
          text: 'Question 1: What are the 3 Ps',
          options: ['Preserve, Prevent,Promote', 'Preserve, Persevere, Play', 'Promotion, People, Psycho-evaluate'],
          correctIndex: 0,
        },
        {
          text: 'Question 2: What is the primary purpose of the "Three P\'s" approach?',
          options: [
            'It is a framework for responding to a medical emegency',
            'Replace the need for in-person classes',
            'Promote learning',
          ],
          correctIndex: 0,
        },
        {
          text: 'Question 3: What can you do to "Promote" recovery before help arrives?',
          options: [
            'Cool a burn immediately',
            'Assess the victim\'s breathing',
            'Both',
          ],
          correctIndex: 2,
        },
      ],
    },

    {
      id: 2,
      title: 'Assess the scene',
      image: require('../assets/imgs/call24.jpg'),
      instructionImage: require('../assets/imgs/1158436_2210.jpg'),      
      steps: [
        'This course is not a replacement for a practical first aid course. Try sources like efa@rwandaredcross.org to sign up for in-person classes.',
        'Check for any dangers to yourself or bystanders',
        'Plan on how you would manage the situation',
        'Are you able to manage the situation? Call for help. We use the European universal emergency number (112).',
      ],
      questions: [
        {
          text: 'Question 1: What should you do if you are not able to manage the situation?',
          options: ['Ignore the situation and leave', 'Call for help', 'Wait for someone else to take action'],
          correctIndex: 1,
        },
        {
          text: 'Question 2: What is the primary purpose of checking for dangers at the scene?',
          options: [
            "To assess the victim's responsiveness",
            'To prevent further injuries to yourself and bystanders',
            'To start CPR immediately',
          ],
          correctIndex: 1,
        },
        {
          text: 'Question 3: What is the European universal emergency number you should call, that is active in Rwanda, for help?',
          options: [
            
            "911",
            '112',
            '999',
          ],
          correctIndex: 1,
        },
      ],
    },
    
    {
      id: 3,
      title: 'Infection Control',
      image: require('../assets/imgs/sanitize.jpg'),
      instructionImage: require('../assets/imgs/1158436_2210.jpg'),      
      steps: [
        'This course is not a replacement for a practical first aid course. Try sources like efa@rwandaredcross.org to sign up for in-person classes.',
        'Wash your hands with soap and water or use handsanitizer often. Ensure any cuts or wounds are covered with plasters or dressings.',
        'Personal Protective Equipment (PPE): Wear disposable latex gloves whenever you handle a situation involving bodily fluids',
        'Dispose of clinical waste sealed in a separate bag away from normal general waste and inform the ambulance so they can dispose of it appropriately.',
      ],
      questions: [
        {
          text: 'What is the recommended way to clean your hands in terms of infection control?',
          options: [' Wipe your hands with a dry cloth', 'Use water only', 'Wash your hands with soap and water or use hand sanitizer regularly'],
          correctIndex: 2,
        },
        {
          text: 'Question 2: Why is it important to cover cuts or wounds with plasters or dressings?',
          options: [
            'To keep them exposed for faster healing',
            'To protect them from infection and further contamination',
            'To prevent them from being touched by others',
          ],
          correctIndex: 1,
        },
        {
          text: 'Question 3: What should you do with clinical waste after using it in a first aid situation?',
          options: [
            'Mix it with normal waste for disposal',
            'Seal it in a separate bag and inform the ambulance for proper disposal',
            'Bury it in the ground to decompose',
          ],
          correctIndex: 1,
        },
      ],
    },

    {
      id: 4,
      title: 'Quick way to asses the victim: DRAB',
      image: require('../assets/imgs/survey.jpg'),
      instructionImage: require('../assets/imgs/Airway.png'),      
      steps: [
        'This course is not a replacement for a practical first aid course. Try sources like efa@rwandaredcross.org to sign up for in-person classes.',
        'D for Danger: Check for any dangers to yourself or the victim. ',
        "R for Response: Grab the victim's attention by shouting. If they don'r respond then they are unconscious. Unconsciousness is classified as a medical emergency and requires immediate first aid intervention. It is important that you work on clearing their airway as the first step because their tongue could roll back or their stomach content could travel back up.",
        'A for Airway: If they are unconcious in any way, use your two fingers to tilt their head backward and lift their chin. Refer to the image above.',
        "B for Breathing: Asses the victim's breathing. Put your hands on their head and chin. Lean the side of your head over their mouth and observe their chest. Do this for up to 10 seconds. Random gasps and snoring do not count as regular breathing. Once you've concluded that they are breathing normal, perform first aid.",
        'Seek medical attention if severe pain or inability to bear weight.',
      ],
      questions: [
        {
          text: 'Question 1: What is the purpose of the "D" in the "DRAB" approach?',
          options: ['Deliver first aid', "Determine the victim's age", 'Danger assessment to ensure safety'],
          correctIndex: 2,
        },
        {
          text: "Question 2: According to the 'R' in 'DRAB' what should you do to grab the victim's attention before concluding they are unconcious?",
          options: [
            'Leave the scene immediately',
            'Assume they are sleeping',
            'Continue shouting louder until they respond',
          ],
          correctIndex: 2,
        },
        {
          text: 'Question 3: How should you position the head and chin during the "A" step of "DRAB" if they are unconscious?',
          options: [
            'Tilt their head forward',
            'Keep their head straight',
            'Tilt their head backward and lift their chin',
          ],
          correctIndex: 2,
        },
      ],
    },

    {
      id: 5,
      title: 'The Recovery Position',
      image: require('../assets/imgs/recovery-position.jpg'),
      instructionImage: require('../assets/imgs/The-Recovery-Position-.png'),      
      steps: [
        'This course is not a replacement for a practical first aid course. Try sources like efa@rwandaredcross.org to sign up for in-person classes.',
        'Place them into the recovery position if they are unconscious but breathing normal',
        'Kneel near the victim’s waist and move their hand closest to you at a right angle.',
        'Move the hand that is furthest from you and place the back of the hand on the cheek closest to you.',
        'Move the leg that is furthest from you and put their foot on the ground.',
        'Use their knee as a lever and pull them onto their side.',
        'Keep their head tilted back and make sure they are laying on their side.',
        'Call the ambulance before or after you place them in the recover position and regularly check their breathing.'
      ],
      questions: [
        {
          text: "Question 1: How should you position the victim's hand when placing them in the recovery position?",
          options: ['Place it on their chest', 'Place the back of the hand on the cheek closest to you', 'Hold it in the air'],
          correctIndex: 1,
        },
        {
          text: 'Question 2: What action should you take after placing the victim in the recovery position?',
          options: [
            'Call the ambulance and then leave the scene',
            'Continue to monitor their breathing and wait for help',
            'Assess the scene for potential danger',
          ],
          correctIndex: 1,
        },
        {
          text: "Question 3: Why is it important to keep the victim's head tilted back while in the recovery position?",
          options: [
            'To help them see their surroundings better',
            'To open up their airway and allow them to breathe more easily',
            'To keep them from rolling onto their stomach',
          ],
          correctIndex: 1,
        },
      ],
    },

    {
      id: 6,
      title: 'Introduction to CPR',
      image: require('../assets/imgs/CPR.jpg'),
      instructionImage: require('../assets/imgs/1158436_2210.jpg'),      
      steps: [
        'This course is not a replacement for a practical first aid course. Try sources like efa@rwandaredcross.org to sign up for in-person classes.',
        "In the event that someone's heart stops beating suddenly CPR helps keep oxygenated blood flowing through the body to keep the organs working until a defibrillator arrives. Warning: It will not restart the heart but it is a temporary soultion until professional help arrives.",
        'CPR (cardiopulmonary resuscitation) should be performed immediately after a person has a cardiac arrest.',
        'Defibrilator: electrical device that sends shock to the heart to bring about normal electrical activity in the heart',
        'Post-resuscitation care: The patient should be rushed to a hospital as soon as the cardiac arrest happens.',
        'Though the next course teaches you how to perfrom CPR in theory. You must get practical experience and certification from an in-person first aid training program.'
      ],
      questions: [
        {
          text: 'Question 1: What is the primary purpose of CPR (cardiopulmonary resuscitation)?',
          options: ['To replace the need for professional help', 'To reduce pain and discomfort in the victim', 'To keep the organs working by maintaining blood flow'],
          correctIndex: 2,
        },
        {
          text: 'Question 2: What is the role of a defibrillator in CPR?',
          options: [
            "To stop the victim's breathing temporarily",
            'To send an electrical shock to restore normal heart rhythm',
            'To reduce pain and discomfort in the victim',
          ],
          correctIndex: 1,
        },
        {
          text: 'Question 3: What does it mean if a victim has a cardiac arrest?',
          options: [
            'Their heart has stopped beating',
            'They have a broken bone',
            'They are unconscious but still breathing',
          ],
          correctIndex: 0,
        },
      ],
    },
    
  ];
  
  export default firstAidData;
  