import { Course } from "@/types";

// Auto-generated from course.json with robust escaping for template literals.
export const COURSE: Course = {
  id: "dbt_mastery_v1",
  title: "DBT Mastery: Complete Skills Training",
  description: "A comprehensive, practice\u2011focused Dialectical Behavior Therapy skills class covering the full DBT model: Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness, Middle Path, behaviorism, validation, chain analysis, diary cards, exposure, and applications for SUD/PTSD. 36 lessons with quizzes and certificate.",
  lessons: [
  {
      id: "l01-orientation",
      title: "Orientation to DBT and Course Overview",
      minutes: 5,
      reading:
        "Dialectical Behavior Therapy (DBT) emerged in the late 1980s as a structured approach for people who struggled with chronic emotion dysregulation, particularly those diagnosed with borderline personality disorder. It has since grown into a widely validated treatment for a range of conditions, including substance use, eating disorders, and post‑traumatic stress disorder. At its core, DBT blends behavioral science with mindfulness practices rooted in Zen traditions.\n\nThe “dialectical” in DBT refers to holding two truths at once: acceptance and change. Clients are taught to accept themselves as they are while simultaneously committing to behaviors that promote growth and reduce suffering. This balancing act prevents therapy from becoming either too permissive (acceptance without change) or too harsh (change without acceptance).\n\nA standard DBT program integrates several components: individual therapy, skills training groups, phone coaching, and a therapist consultation team. Skills training—the focus of this class—teaches practical strategies for everyday life. This course is designed to replicate that educational component. It is not a substitute for therapy but is intended to equip learners with tools that can be applied in daily contexts.\n\nIn this first lesson, you will learn about the overarching structure of DBT, the importance of a staged hierarchy of treatment goals, and what you can expect from this curriculum. The hierarchy begins with reducing life‑threatening behaviors, then focuses on therapy‑interfering behaviors, and later addresses quality‑of‑life issues. Only after stabilization can one meaningfully build a life worth living.\n\nThis class will walk you through all four core skills modules: Mindfulness, Distress Tolerance, Emotion Regulation, and Interpersonal Effectiveness. You will also explore assumptions of DBT, the biosocial theory that underpins it, and advanced strategies such as chain analysis. Each module builds on the previous, so the sequence matters.\n\nBy the end of this orientation, you should understand the philosophy of DBT, the course structure, and how to approach your learning journey: be patient, practice regularly, and remember that no one fails in DBT—if a skill isn’t working, the task is to adapt the approach.\n",
      quiz: [
        {
          id: "l1q1",
          prompt: "True/False: DBT combines acceptance and change strategies.",
          options: [
            { text: "True", correct: true },
            { text: "False", correct: false },
          ],
        },
        {
          id: "l1q2",
          prompt:
            "Fill in the blank: The term 'dialectical' refers to balancing acceptance and ______.",
          options: [
            { text: "rejection", correct: false },
            { text: "change", correct: true },
            { text: "avoidance", correct: false },
            { text: "denial", correct: false },
          ],
        },
        {
          id: "l1q3",
          prompt: "Select the component NOT typically part of DBT:",
          options: [
            { text: "Skills training", correct: false },
            { text: "Phone coaching", correct: false },
            { text: "Hypnosis", correct: true },
            { text: "Consultation team", correct: false },
          ],
        },
        {
          id: "l1q4",
          prompt:
            "Scenario: A student feels guilty for not using a skill correctly. DBT would view this as…",
          options: [
            { text: "Failure of the client", correct: false },
            { text: "An opportunity to adapt the skill", correct: true },
            { text: "Reason to end therapy", correct: false },
            { text: "Proof the skill is useless", correct: false },
          ],
        },
        {
          id: "l1q5",
          prompt: "Ordering: Which treatment target is addressed FIRST?",
          options: [
            { text: "Therapy‑interfering behaviors", correct: false },
            { text: "Life‑threatening behaviors", correct: true },
            { text: "Quality‑of‑life issues", correct: false },
            { text: "Building a career", correct: false },
          ],
        },
        {
          id: "l1q6",
          prompt: "Matching: Which module teaches crisis survival skills?",
          options: [
            { text: "Mindfulness", correct: false },
            { text: "Distress Tolerance", correct: true },
            { text: "Emotion Regulation", correct: false },
            { text: "Interpersonal Effectiveness", correct: false },
          ],
        },
        {
          id: "l1q7",
          prompt:
            "True/False: Skills training is the same as full DBT treatment.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l1q8",
          prompt: "Select the best description of this course:",
          options: [
            { text: "Substitute for therapy", correct: false },
            { text: "Educational skills training", correct: true },
            { text: "Medication protocol", correct: false },
            { text: "Self‑help without structure", correct: false },
          ],
        },
      ],
    },
    {
      id: "l02-biosocial",
      title: "DBT Assumptions and the Biosocial Theory",
      minutes: 5,
      reading:
        "DBT is built on a set of assumptions about clients and the biosocial theory of emotional vulnerability. Understanding these ideas is critical because they shape the therapist’s stance and the way skills are taught.\n\nThe biosocial theory suggests that emotion dysregulation develops from the interaction of two forces: a biological predisposition toward high emotional sensitivity and an invalidating environment. High sensitivity means a person reacts quickly and intensely to emotional triggers and takes longer...\n\nDBT’s treatment assumptions include: clients are doing the best they can; clients want to improve; clients need to try harder, do better, and be more motivated; clients may not have caused all their problems but are responsible for solving them; and clients cannot fail in DBT—only the treatment can fail to fit. These assumptions promote compassion while still emphasizing accountability.\n\nValidation is a key acceptance strategy. It communicates that a person’s internal experience makes sense given their context, even if the behavior is problematic. Validation differs from agreement—it acknowledges emotions without necessarily endorsing the response. Change strategies, on the other hand, involve behavioral analysis, problem‑solving, and reinforcement of skillful behavior.\n\nTogether, these principles form the dialectical balance of DBT: validation without change leaves people stuck, while change without validation leaves people invalidated. Both are required for progress.\n",
      quiz: [
        {
          id: "l2q1",
          prompt: "True/False: Clients in DBT are assumed to want to improve.",
          options: [
            { text: "True", correct: true },
            { text: "False", correct: false },
          ],
        },
        {
          id: "l2q2",
          prompt:
            "Fill in the blank: The biosocial theory emphasizes biology plus ______.",
          options: [
            { text: "support", correct: false },
            { text: "invalidating environments", correct: true },
            { text: "therapy", correct: false },
            { text: "avoidance", correct: false },
          ],
        },
        {
          id: "l2q3",
          prompt: "Select the statement that best describes validation:",
          options: [
            { text: "Agreeing with all behaviors", correct: false },
            {
              text: "Communicating that emotions make sense in context",
              correct: true,
            },
            { text: "Ignoring feelings", correct: false },
            { text: "Punishing expressions of emotion", correct: false },
          ],
        },
        {
          id: "l2q4",
          prompt:
            "Scenario: A parent tells a child 'You're too sensitive.' This exemplifies…",
          options: [
            { text: "Validation", correct: false },
            { text: "Invalidation", correct: true },
            { text: "Acceptance", correct: false },
            { text: "Mindfulness", correct: false },
          ],
        },
        {
          id: "l2q5",
          prompt: "Matching: Which is a change strategy?",
          options: [
            { text: "Validation", correct: false },
            { text: "Behavioral analysis", correct: true },
            { text: "Active listening", correct: false },
            { text: "Empathy", correct: false },
          ],
        },
        {
          id: "l2q6",
          prompt: "Ordering: In a chain analysis, what comes first?",
          options: [
            { text: "Consequences", correct: false },
            { text: "Prompting event", correct: true },
            { text: "Replacement behavior", correct: false },
            { text: "Emotional aftereffect", correct: false },
          ],
        },
        {
          id: "l2q7",
          prompt:
            "True/False: In DBT, only the client can fail, not the treatment.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l2q8",
          prompt: "Select the dialectical balance in DBT:",
          options: [
            { text: "Validation + Change", correct: true },
            { text: "Avoidance + Agreement", correct: false },
            { text: "Judgment + Control", correct: false },
            { text: "Biology + Therapy", correct: false },
          ],
        },
      ],
    },
    {
      id: "l03-mindfulness",
      title: "Mindfulness: What and How Skills",
      minutes: 5,
      reading:
        "Mindfulness is the foundation of all DBT skills. Without mindfulness, you cannot effectively regulate emotions, tolerate distress, or improve relationships. DBT teaches mindfulness through “What” skills—Observe, Describe, Participate—and “How” skills—Non‑judgmentally, One‑mindfully, Effectively.\n\nObserve means simply noticing internal and external experiences, such as sensations, thoughts, and sounds. Describe means putting words to what you notice, labeling phenomena without judgment. Participate means ...\n\nThe “How” skills guide the manner in which mindfulness is practiced. Non‑judgmentally means noticing without labeling experiences as good or bad. One‑mindfully means focusing attention on one thing at a time. Effectively means doing what works in pursuit of your goals, rather than clinging to what feels comfortable.\n\nDBT also emphasizes Wise Mind—the synthesis of Emotion Mind and Reasonable Mind. Wise Mind is the calm, centered perspective that integrates feeling and logic. By practicing mindfulness consistently, you strengthen access to Wise Mind, which becomes the compass for all other DBT skills.\n",
      quiz: [
        {
          id: "l3q1",
          prompt: "Select the DBT 'What' skills:",
          options: [
            { text: "Observe, Describe, Participate", correct: true },
            {
              text: "Non‑judgmentally, One‑mindfully, Effectively",
              correct: false,
            },
            { text: "Accept, Change, Validate", correct: false },
            { text: "Think, Act, Review", correct: false },
          ],
        },
        {
          id: "l3q2",
          prompt: "True/False: Wise Mind integrates emotion and reason.",
          options: [
            { text: "True", correct: true },
            { text: "False", correct: false },
          ],
        },
        {
          id: "l3q3",
          prompt: "Fill in the blank: One‑mindfully means doing ______.",
          options: [
            { text: "everything quickly", correct: false },
            { text: "one thing at a time", correct: true },
            { text: "nothing", correct: false },
            { text: "several tasks", correct: false },
          ],
        },
        {
          id: "l3q4",
          prompt:
            "Scenario: You notice your heart racing and say 'I am weak.' A more mindful Describe would be…",
          options: [
            { text: "Ignore it", correct: false },
            { text: "Say 'I am weak' louder", correct: false },
            { text: "Label sensation as 'heart racing'", correct: true },
            { text: "Distract", correct: false },
          ],
        },
        {
          id: "l3q5",
          prompt: "Matching: 'Effectively' means…",
          options: [
            { text: "Do what works", correct: true },
            { text: "Do what feels easiest", correct: false },
            { text: "Do what others expect", correct: false },
            { text: "Do nothing", correct: false },
          ],
        },
        {
          id: "l3q6",
          prompt: "Ordering: Choose a correct mindfulness sequence.",
          options: [
            { text: "Observe → Describe → Participate", correct: true },
            { text: "Judge → React → Avoid", correct: false },
            { text: "Participate → Ignore → Judge", correct: false },
            { text: "Avoid → Analyze → Act", correct: false },
          ],
        },
        {
          id: "l3q7",
          prompt: "True/False: Mindfulness is optional in DBT.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l3q8",
          prompt: "Select the best anchor for mindfulness practice:",
          options: [
            { text: "Breath", correct: true },
            { text: "Future goals", correct: false },
            { text: "Past mistakes", correct: false },
            { text: "Daydreaming", correct: false },
          ],
        },
      ],
    },
    {
      id: "l04-distress",
      title: "Distress Tolerance: Crisis Survival Skills",
      minutes: 5,
      reading:
        "Distress Tolerance (DT) skills are designed for surviving intense emotional pain without making things worse. These skills are particularly useful during crises when emotions are overwhelming. They do not solve the underlying problem; instead, they provide short‑term stability.\n\nOne of the most well‑known sets of DT skills is TIP: Temperature, Intense exercise, Paced breathing, and Paired muscle relaxation. These skills quickly reduce physiological arousal. Another set is ACCEPTS, which stands for Activit...\n\nSelf‑soothing involves using the five senses to comfort yourself. IMPROVE the Moment is another strategy, standing for Imagery, Meaning, Prayer, Relaxation, One thing in the moment, Vacation, and Encouragement. Pros and Cons help weigh urges against long‑term goals.\n\nBy practicing DT skills, you gain tools to ride out emotional storms until they pass, preserving safety and relationships.\n",
      quiz: [
        {
          id: "l4q1",
          prompt:
            "True/False: DT skills solve underlying problems permanently.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l4q2",
          prompt: "Fill in the blank: The 'T' in TIP stands for ______.",
          options: [
            { text: "Time", correct: false },
            { text: "Temperature", correct: true },
            { text: "Talking", correct: false },
            { text: "Tolerance", correct: false },
          ],
        },
        {
          id: "l4q3",
          prompt: "Select the best use of ACCEPTS skills:",
          options: [
            { text: "Distract safely", correct: true },
            { text: "Judge harshly", correct: false },
            { text: "Withdraw from coping", correct: false },
            { text: "Increase arousal", correct: false },
          ],
        },
        {
          id: "l4q4",
          prompt:
            "Scenario: You feel the urge to self‑harm. A DT skill might be…",
          options: [
            { text: "Cold water on face", correct: true },
            { text: "Rumination", correct: false },
            { text: "Immediate action", correct: false },
            { text: "Suppression", correct: false },
          ],
        },
        {
          id: "l4q5",
          prompt: "Matching: IMPROVE includes…",
          options: [
            { text: "Isolation", correct: false },
            { text: "Prayer", correct: true },
            { text: "Neglect", correct: false },
            { text: "Escape", correct: false },
          ],
        },
        {
          id: "l4q6",
          prompt: "Ordering: Arrange TIP correctly.",
          options: [
            { text: "Cold water → Exercise → Paced breathing", correct: true },
            {
              text: "Exercise → Cold water → Scroll social media",
              correct: false,
            },
            { text: "Breathing → Ignore → Act out", correct: false },
            { text: "Sleep → Rumination → Pacing", correct: false },
          ],
        },
        {
          id: "l4q7",
          prompt:
            "True/False: Pros and Cons clarify consequences of acting on urges.",
          options: [
            { text: "True", correct: true },
            { text: "False", correct: false },
          ],
        },
        {
          id: "l4q8",
          prompt: "Select the best definition of Self‑soothing:",
          options: [
            { text: "Using five senses for comfort", correct: true },
            { text: "Avoiding responsibility", correct: false },
            { text: "Ignoring emotions", correct: false },
            { text: "Criticizing yourself", correct: false },
          ],
        },
      ],
    },
    {
      id: "l05-emotion",
      title: "Emotion Regulation: Understanding and Shaping Emotions",
      minutes: 5,
      reading:
        "Emotion Regulation (ER) skills teach you to understand and manage your emotions more effectively. DBT views emotions as functional: they organize action, communicate to others, and provide information. However, emotions can also become overwhelming and lead to problem behaviors.\n\nER introduces several key strategies. First is “Check the Facts,” where you evaluate whether your emotional reaction fits the actual situation. If your interpretation is inaccurate, adjusting your thoughts can reduce the intens...\n\nAnother major strategy is Opposite Action. When an emotion is unjustified or unhelpful, you act opposite to the urge it produces. For example, if unjustified fear urges you to avoid, you instead approach gradually. Accumulating positive experiences is also emphasized, both in the short term (engaging in pleasant activities) and long term (building a meaningful life).\n\nBy applying ER skills, you reduce emotional vulnerability and increase your capacity to live according to your values.\n",
      quiz: [
        {
          id: "l5q1",
          prompt: "True/False: Emotions serve no useful function.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l5q2",
          prompt:
            "Fill in the blank: 'Check the Facts' helps determine if an emotion ______.",
          options: [
            { text: "is justified", correct: true },
            { text: "is avoidant", correct: false },
            { text: "is random", correct: false },
            { text: "is social", correct: false },
          ],
        },
        {
          id: "l5q3",
          prompt: "Select the best description of Opposite Action:",
          options: [
            { text: "Acting opposite to unjustified urges", correct: true },
            { text: "Acting on every urge", correct: false },
            { text: "Suppressing feelings", correct: false },
            { text: "Ignoring problems", correct: false },
          ],
        },
        {
          id: "l5q4",
          prompt:
            "Scenario: You feel intense anger when your friend is five minutes late. DBT skill to try:",
          options: [
            { text: "Opposite Action", correct: true },
            { text: "Self‑soothe", correct: false },
            { text: "Suppression", correct: false },
            { text: "Rumination", correct: false },
          ],
        },
        {
          id: "l5q5",
          prompt: "Matching: Accumulating positives means…",
          options: [
            {
              text: "Increasing pleasant and meaningful experiences",
              correct: true,
            },
            { text: "Suppressing anger", correct: false },
            { text: "Reducing exercise", correct: false },
            { text: "Isolating yourself", correct: false },
          ],
        },
        {
          id: "l5q6",
          prompt: "Ordering: Choose steps to reduce vulnerability (PLEASE).",
          options: [
            {
              text: "Treat illness → Balance eating → Avoid mood‑altering substances",
              correct: true,
            },
            { text: "Skip sleep → Overeat → Ignore illness", correct: false },
            {
              text: "Ignore exercise → Use substances → Suppress",
              correct: false,
            },
            { text: "Delay care → Overwork", correct: false },
          ],
        },
        {
          id: "l5q7",
          prompt:
            "True/False: Opposite Action can reduce the intensity of emotions.",
          options: [
            { text: "True", correct: true },
            { text: "False", correct: false },
          ],
        },
        {
          id: "l5q8",
          prompt:
            "Select the best strategy when sadness fits the facts but is overwhelming:",
          options: [
            { text: "Check the Facts", correct: false },
            { text: "Opposite Action", correct: true },
            { text: "Avoidance", correct: false },
            { text: "Suppression", correct: false },
          ],
        },
      ],
    },
    {
      id: "l06-ie-basics",
      title: "Interpersonal Effectiveness I: DEAR MAN, GIVE, FAST",
      minutes: 5,
      reading:
        "Interpersonal Effectiveness (IE) skills help individuals balance three priorities: achieving objectives, maintaining relationships, and preserving self-respect. DBT organizes these into structured strategies: DEAR MAN for objective effectiveness, GIVE for relationship effectiveness, and FAST for self-respect effectiveness.\n\nDEAR MAN stands for Describe, Express, Assert, Reinforce, and then staying Mindful, Appearing confident, and Negotiating. It is a formula for asking for what you want or saying no, w...\nGIVE reminds us to be Gentle, act Interested, Validate, and use an Easy manner—keeping relationships positive. FAST is about being Fair, not Apologizing unnecessarily, Sticking to values, and being Truthful—ensuring you do not compromise self-respect in the process.\n\nBy practicing IE skills, you can better navigate conflicts, assert needs, and balance boundaries while still respecting yourself and others.\n",
      quiz: [
        {
          id: "l6q1",
          prompt:
            "True/False: Interpersonal Effectiveness only focuses on getting what you want.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l6q2",
          prompt: "Fill in the blank: In DEAR MAN, 'A' stands for ______.",
          options: [
            { text: "Apologize", correct: false },
            { text: "Assert", correct: true },
            { text: "Agree", correct: false },
            { text: "Avoid", correct: false },
          ],
        },
        {
          id: "l6q3",
          prompt: "Select the best summary of GIVE skills:",
          options: [
            {
              text: "Gentle, Interested, Validate, Easy manner",
              correct: true,
            },
            { text: "Great, Independent, Value, Effective", correct: false },
            { text: "Gentle, Important, Value, Empathy", correct: false },
            { text: "Give, Inspire, Validate, Engage", correct: false },
          ],
        },
        {
          id: "l6q4",
          prompt:
            "Scenario: You want to refuse extra work politely. Which DBT skill is best?",
          options: [
            { text: "FAST", correct: false },
            { text: "GIVE", correct: false },
            { text: "DEAR MAN", correct: true },
            { text: "Avoidance", correct: false },
          ],
        },
        {
          id: "l6q5",
          prompt: "Matching: FAST protects…",
          options: [
            { text: "Objectives", correct: false },
            { text: "Self-respect", correct: true },
            { text: "Relationships", correct: false },
            { text: "Time", correct: false },
          ],
        },
        {
          id: "l6q6",
          prompt: "Ordering: Correct DEAR MAN sequence.",
          options: [
            { text: "Describe → Express → Assert → Reinforce", correct: true },
            { text: "Express → Negotiate → Describe", correct: false },
            { text: "Reinforce → Avoid → Assert", correct: false },
            { text: "Mindful → Negotiate → Assert", correct: false },
          ],
        },
        {
          id: "l6q7",
          prompt: "True/False: Validation is part of GIVE skills.",
          options: [
            { text: "True", correct: true },
            { text: "False", correct: false },
          ],
        },
        {
          id: "l6q8",
          prompt: "Select the best meaning of 'Negotiation' in DEAR MAN:",
          options: [
            { text: "Never compromise", correct: false },
            { text: "Work toward solutions acceptable to both", correct: true },
            { text: "Give in immediately", correct: false },
            { text: "Refuse to discuss", correct: false },
          ],
        },
      ],
    },
    {
      id: "l07-dt-radical",
      title: "Distress Tolerance II: Radical Acceptance",
      minutes: 5,
      reading:
        "Advanced Distress Tolerance emphasizes Radical Acceptance. Radical Acceptance means fully acknowledging reality as it is, without judgment or resistance. Pain becomes suffering when you refuse to accept what is already true. Acceptance does not mean approval—it simply means dropping the struggle against facts you cannot change.\n\nSkills supporting Radical Acceptance include Turning the Mind (choosing acceptance again and again), Willingness versus Willfulness (open posture toward reality rather than stubbor...\nBy practicing Radical Acceptance, you reduce suffering and conserve energy for what can be changed. This is especially crucial in chronic pain, loss, or ongoing adversity where fighting reality intensifies distress.\n",
      quiz: [
        {
          id: "l7q1",
          prompt:
            "True/False: Radical Acceptance means approving of harmful events.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l7q2",
          prompt: "Fill in the blank: Pain plus non-acceptance equals ______.",
          options: [
            { text: "Joy", correct: false },
            { text: "Suffering", correct: true },
            { text: "Relief", correct: false },
            { text: "Strength", correct: false },
          ],
        },
        {
          id: "l7q3",
          prompt: "Select the skill that supports Radical Acceptance:",
          options: [
            { text: "Turning the Mind", correct: true },
            { text: "Suppression", correct: false },
            { text: "Judgment", correct: false },
            { text: "Rumination", correct: false },
          ],
        },
        {
          id: "l7q4",
          prompt:
            "Scenario: You lose your job unexpectedly. A Radical Acceptance step is…",
          options: [
            { text: "Deny it happened", correct: false },
            { text: "Accept reality and plan next steps", correct: true },
            { text: "Blame yourself harshly", correct: false },
            { text: "Pretend nothing changed", correct: false },
          ],
        },
        {
          id: "l7q5",
          prompt: "Matching: Willfulness is best contrasted with…",
          options: [
            { text: "Willingness", correct: true },
            { text: "Wisdom", correct: false },
            { text: "Weakness", correct: false },
            { text: "Withdrawal", correct: false },
          ],
        },
        {
          id: "l7q6",
          prompt: "Ordering: Steps to practice Radical Acceptance.",
          options: [
            {
              text: "Notice → Acknowledge reality → Turn the Mind",
              correct: true,
            },
            { text: "Deny → Resist → Avoid", correct: false },
            { text: "Judge → Blame → Withdraw", correct: false },
            { text: "Ruminate → Suppress → Distract", correct: false },
          ],
        },
        {
          id: "l7q7",
          prompt: "True/False: Radical Acceptance eliminates pain.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l7q8",
          prompt: "Select the best context for Radical Acceptance:",
          options: [
            { text: "Chronic illness", correct: true },
            { text: "Simple math homework", correct: false },
            { text: "Daily grocery shopping", correct: false },
            { text: "Deciding a lunch menu", correct: false },
          ],
        },
      ],
    },
    {
      id: "l08-er-vulnerability",
      title: "Emotion Regulation II: PLEASE, Mastery, Coping Ahead",
      minutes: 5,
      reading:
        "Emotion Regulation continues with skills to reduce vulnerability to emotional dysregulation. DBT teaches the acronym PLEASE: treat PhysicaL illness, balance Eating, avoid mood-Altering substances, balance Sleep, and get Exercise. By maintaining these basics, you strengthen your emotional baseline.\n\nBuilding Mastery involves engaging in activities that build competence and confidence. Coping Ahead means rehearsing challenging situations in your mind and planning skill use before entering them. Together, ...\n",
      quiz: [
        {
          id: "l8q1",
          prompt:
            "True/False: PLEASE skills target physical and lifestyle vulnerabilities.",
          options: [
            { text: "True", correct: true },
            { text: "False", correct: false },
          ],
        },
        {
          id: "l8q2",
          prompt: "Fill in the blank: The 'E' in PLEASE stands for ______.",
          options: [
            { text: "Eating", correct: true },
            { text: "Empathy", correct: false },
            { text: "Energy", correct: false },
            { text: "Emotion", correct: false },
          ],
        },
        {
          id: "l8q3",
          prompt: "Select the best example of Building Mastery:",
          options: [
            { text: "Avoiding all tasks", correct: false },
            { text: "Trying new skills regularly", correct: true },
            { text: "Ignoring challenges", correct: false },
            { text: "Suppressing effort", correct: false },
          ],
        },
        {
          id: "l8q4",
          prompt:
            "Scenario: You anticipate conflict at a meeting. DBT suggests…",
          options: [
            {
              text: "Coping Ahead by rehearsing skillful responses",
              correct: true,
            },
            { text: "Suppress feelings", correct: false },
            { text: "Skip the meeting", correct: false },
            { text: "React impulsively", correct: false },
          ],
        },
        {
          id: "l8q5",
          prompt: "Matching: Which PLEASE factor relates to drugs?",
          options: [
            { text: "Eating", correct: false },
            { text: "Avoiding mood-Altering substances", correct: true },
            { text: "Exercise", correct: false },
            { text: "Sleep", correct: false },
          ],
        },
        {
          id: "l8q6",
          prompt: "Ordering: Arrange PLEASE factors.",
          options: [
            {
              text: "Treat illness → Balance eating → Avoid mood-altering → Sleep → Exercise",
              correct: true,
            },
            { text: "Avoid → Suppress → Ignore", correct: false },
            { text: "Overeat → Skip sleep → Deny illness", correct: false },
            { text: "Exercise → Ignore → Delay care", correct: false },
          ],
        },
        {
          id: "l8q7",
          prompt:
            "True/False: Coping Ahead involves imagining worst-case scenarios without planning.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l8q8",
          prompt: "Select the best definition of Mastery in DBT:",
          options: [
            { text: "Avoid failure", correct: false },
            { text: "Build competence through practice", correct: true },
            { text: "Suppress emotions", correct: false },
            { text: "Achieve perfection", correct: false },
          ],
        },
      ],
    },
    {
      id: "l09-ie-advanced",
      title: "Interpersonal Effectiveness II: Balancing Goals and Context",
      minutes: 5,
      reading:
        "Interpersonal Effectiveness expands into balancing the three goals: objective, relationship, and self-respect. DBT emphasizes clarifying your priorities before entering interactions. For example, if your relationship is fragile, prioritize maintaining it; if your self-respect is on the line, use FAST skills more strongly.\n\nAdvanced strategies include attending to power dynamics, cultural context, and long-term relationship patterns. Sometimes saying no preserves both self-respect and the relationship, espe...\n",
      quiz: [
        {
          id: "l9q1",
          prompt:
            "True/False: In DBT, every interaction should prioritize objectives over relationships.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l9q2",
          prompt: "Fill in the blank: FAST skills emphasize ______.",
          options: [
            { text: "fairness and truthfulness", correct: true },
            { text: "flexibility and tolerance", correct: false },
            { text: "fast responses", correct: false },
            { text: "friendliness only", correct: false },
          ],
        },
        {
          id: "l9q3",
          prompt:
            "Select the best strategy when a fragile relationship is at risk:",
          options: [
            { text: "Prioritize relationship goals", correct: true },
            { text: "Prioritize objectives", correct: false },
            { text: "Ignore priorities", correct: false },
            { text: "Suppress needs", correct: false },
          ],
        },
        {
          id: "l9q4",
          prompt:
            "Scenario: A peer pressures you to do something against your values. DBT suggests…",
          options: [
            { text: "Use FAST skills to protect self-respect", correct: true },
            { text: "Give in immediately", correct: false },
            { text: "Suppress values", correct: false },
            { text: "Overreact", correct: false },
          ],
        },
        {
          id: "l9q5",
          prompt: "Matching: DEAR MAN relates to…",
          options: [
            { text: "Objectives", correct: true },
            { text: "Self-respect", correct: false },
            { text: "Relationships", correct: false },
            { text: "Mindfulness", correct: false },
          ],
        },
        {
          id: "l9q6",
          prompt: "Ordering: Choose correct skill priority sequence.",
          options: [
            { text: "Clarify goals → Select skills → Execute", correct: true },
            { text: "Execute → Clarify → Suppress", correct: false },
            { text: "Avoid → Guess → Act", correct: false },
            { text: "Suppress → Overreact → Plan", correct: false },
          ],
        },
        {
          id: "l9q7",
          prompt:
            "True/False: Cultural context has no role in interpersonal effectiveness.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l9q8",
          prompt: "Select the best meaning of balancing goals:",
          options: [
            {
              text: "Choosing which of the three aims to emphasize",
              correct: true,
            },
            { text: "Always pursuing all aims equally", correct: false },
            { text: "Suppressing one goal always", correct: false },
            { text: "Ignoring context", correct: false },
          ],
        },
      ],
    },
    {
      id: "l10-chain",
      title: "Behavioral Chain and Solution Analysis",
      minutes: 5,
      reading:
        "DBT uses Behavioral Chain Analysis to understand problem behaviors. A chain analysis traces the sequence of events leading up to a behavior, including prompting events, vulnerabilities, links in the chain (thoughts, feelings, actions), and consequences. This analysis helps identify where skills could have been applied differently.\n\nSolution Analysis follows, generating options for future skillful responses. By mapping out problem behaviors and analyzing alternatives, clients learn to interrupt patterns a...\n",
      quiz: [
        {
          id: "l10q1",
          prompt:
            "True/False: A chain analysis only includes the final behavior.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l10q2",
          prompt:
            "Fill in the blank: The first step in chain analysis is identifying the ______ event.",
          options: [
            { text: "Consequences", correct: false },
            { text: "Prompting", correct: true },
            { text: "Skill", correct: false },
            { text: "Avoidance", correct: false },
          ],
        },
        {
          id: "l10q3",
          prompt: "Select the best description of Solution Analysis:",
          options: [
            { text: "Planning future skillful alternatives", correct: true },
            { text: "Punishing mistakes", correct: false },
            { text: "Ignoring events", correct: false },
            { text: "Suppressing emotions", correct: false },
          ],
        },
        {
          id: "l10q4",
          prompt:
            "Scenario: You binge eat after conflict. Chain analysis would…",
          options: [
            {
              text: "Trace events and emotions leading to binge",
              correct: true,
            },
            { text: "Ignore triggers", correct: false },
            { text: "Only punish behavior", correct: false },
            { text: "Focus on diet", correct: false },
          ],
        },
        {
          id: "l10q5",
          prompt: "Matching: Which is part of a chain analysis?",
          options: [
            { text: "Vulnerabilities", correct: true },
            { text: "Suppression", correct: false },
            { text: "Denial", correct: false },
            { text: "Blame", correct: false },
          ],
        },
        {
          id: "l10q6",
          prompt: "Ordering: Steps in chain analysis.",
          options: [
            {
              text: "Prompting event → Vulnerabilities → Links → Behavior → Consequences",
              correct: true,
            },
            {
              text: "Behavior → Consequences → Prompting event",
              correct: false,
            },
            { text: "Suppress → Avoid → React", correct: false },
            { text: "Guess → Act → Suppress", correct: false },
          ],
        },
        {
          id: "l10q7",
          prompt:
            "True/False: Solution Analysis involves brainstorming alternative responses.",
          options: [
            { text: "True", correct: true },
            { text: "False", correct: false },
          ],
        },
        {
          id: "l10q8",
          prompt: "Select the best goal of chain analysis:",
          options: [
            { text: "Identify skill use points", correct: true },
            { text: "Ignore urges", correct: false },
            { text: "Suppress emotions", correct: false },
            { text: "Increase blame", correct: false },
          ],
        },
      ],
    },
    {
      id: "l11-er-advanced",
      title:
        "Emotion Regulation III: Deep Dive on Check the Facts & Opposite Action",
      minutes: 5,
      reading:
        "Emotion Regulation becomes more precise when you treat emotions as hypotheses to be tested. “Check the Facts” is not a slogan; it is a structured inquiry. The steps include: (1) identify the emotion and urge, (2) specify the prompting event in concrete terms, (3) list interpretations and assumptions, (4) test those interpretations with observable facts, base rates, and alternative explanations, and (5) decide whether the emotion “fits the facts” or is amplified by cognitive shortcuts (catastrophizing, mind reading, overgeneralization). If the emotion fits, skillful action may include problem solving, assertive requests, or skill-supported grieving. If it does not fit, consider Opposite Action.\n\nOpposite Action is often misunderstood. It is not “fake it till you make it.” Rather, it is a targeted exposure to feared or avoided stimuli, paired with values-consistent behavior. The aim is to let new learning occur: when you approach safely and consistently, the catastrophic prediction often fails to materialize, and the emotion right-sizes over time. Opposite Action parameters include: dose (how long you approach), frequency (how often), intensity (starting with tolerable steps), and safety (planning and coaching as needed).\n\nWhen an emotion both fits the facts and is still too intense to be effective (e.g., anger that fits after a boundary violation but now overwhelms), the DBT move is to reduce vulnerability (PLEASE), add mindfulness, and then choose the most effective action for your long-term goals. DBT remains pragmatic: “What works?”\n\nIt is also crucial to track outcomes. After Opposite Action, did avoidance decrease? Did urges drop? Which thoughts were most sticky? Review the chain and update your plan. ER is a cycle of hypothesis → test → learn → iterate.\n",
      quiz: [
        {
          id: "l11q1",
          prompt:
            "True/False: Opposite Action is the same as pretending to feel different.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l11q2",
          prompt:
            "Fill in the blank: Check the Facts treats emotions as ______ to be tested.",
          options: [
            { text: "facts", correct: false },
            { text: "hypotheses", correct: true },
            { text: "mistakes", correct: false },
            { text: "habits", correct: false },
          ],
        },
        {
          id: "l11q3",
          prompt: "Select the best reason to use Opposite Action:",
          options: [
            { text: "Emotion does not fit the facts", correct: true },
            { text: "You want to suppress feelings", correct: false },
            { text: "You prefer avoidance", correct: false },
            { text: "There is no value in exposure", correct: false },
          ],
        },
        {
          id: "l11q4",
          prompt:
            "Scenario: You fear classmates will mock you if you speak once in a meeting. A DBT-consistent first step is…",
          options: [
            { text: "Never attend", correct: false },
            {
              text: "Speak for 10 seconds with a prepared sentence",
              correct: true,
            },
            { text: "Confront everyone", correct: false },
            { text: "Wait for confidence to appear", correct: false },
          ],
        },
        {
          id: "l11q5",
          prompt:
            "Matching: Parameter that controls starting difficulty of exposure:",
          options: [
            { text: "Dose", correct: false },
            { text: "Intensity", correct: true },
            { text: "Frequency", correct: false },
            { text: "Safety", correct: false },
          ],
        },
        {
          id: "l11q6",
          prompt: "Ordering: Choose a sensible Check the Facts sequence.",
          options: [
            {
              text: "Name emotion → Specify prompting event → List interpretations → Test with facts → Decide fit",
              correct: true,
            },
            {
              text: "Decide fit → List interpretations → Name emotion → Test with facts",
              correct: false,
            },
            { text: "Test with facts → Name emotion → Guess", correct: false },
            { text: "Name emotion → Avoid → Decide fit", correct: false },
          ],
        },
        {
          id: "l11q7",
          prompt:
            "True/False: If anger fits the facts but is too intense, skills like PLEASE and mindfulness may help before acting.",
          options: [
            { text: "True", correct: true },
            { text: "False", correct: false },
          ],
        },
        {
          id: "l11q8",
          prompt: "Select the best follow-up after Opposite Action:",
          options: [
            { text: "Ignore outcomes", correct: false },
            { text: "Track urge changes and update plan", correct: true },
            { text: "Increase avoidance", correct: false },
            { text: "Punish yourself for anxiety", correct: false },
          ],
        },
      ],
    },
    {
      id: "l12-mindfulness-advanced",
      title: "Mindfulness II: Wise Mind Access & Everyday Application",
      minutes: 5,
      reading:
        "Advanced mindfulness in DBT means operationalizing Wise Mind under realistic constraints. Wise Mind is the synthesis of Emotion Mind (feeling-driven) and Reasonable Mind (logic-driven). Accessing it is a skill: pausing, observing body cues, anchoring attention (breath, sound, contact points), and inviting the quiet “knowing” that respects both data and values. DBT emphasizes micro-practices: 15–60 second reps embedded through the day—opening a door, washing hands, waiting for a page to load—each a chance to Observe, Describe, and Participate.\n\nNonjudgmental stance is not the absence of discernment; it is the refusal to add value-laden labels (good/bad, should/shouldn’t) that inflame reactivity. You still evaluate effectiveness: “Does this move me toward my goals?” One‑mindfully is the antidote to multitasking overload; reducing task-switching preserves cognitive bandwidth. Effectively means adjusting behavior to context—even dropping preferred techniques if they are not working in the moment.\n\nCommon obstacles include “I don’t have time,” “Mindfulness makes me more anxious,” or “I’m bored.” DBT answers with shorter reps, different anchors (sound, touch, posture), and pairing practice with daily routines. For anxiety spikes during practice, use paced breathing (e.g., 4–6 breaths per minute), ground with the five senses, or open your eyes and soften the focus (eyes-open mindfulness can reduce panic for some learners).\n\nThe goal isn’t calm; it’s choice. Mindfulness increases the space between trigger and action, allowing values to guide behavior.\n",
      quiz: [
        {
          id: "l12q1",
          prompt:
            "True/False: Nonjudgmental stance means abandoning discernment.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l12q2",
          prompt:
            "Fill in the blank: Wise Mind synthesizes Emotion Mind and ______ Mind.",
          options: [
            { text: "Creative", correct: false },
            { text: "Reasonable", correct: true },
            { text: "Habit", correct: false },
            { text: "Curious", correct: false },
          ],
        },
        {
          id: "l12q3",
          prompt: "Select the best definition of One‑mindfully:",
          options: [
            {
              text: "Doing one thing at a time with full attention",
              correct: true,
            },
            { text: "Doing many things fast", correct: false },
            { text: "Doing nothing", correct: false },
            { text: "Avoiding choices", correct: false },
          ],
        },
        {
          id: "l12q4",
          prompt:
            "Scenario: Mindfulness increases your anxiety. A DBT-consistent adjustment is…",
          options: [
            { text: "Force longer sessions", correct: false },
            {
              text: "Switch to eyes‑open practice and paced breathing",
              correct: true,
            },
            { text: "Stop all practice", correct: false },
            { text: "Judge yourself harshly", correct: false },
          ],
        },
        {
          id: "l12q5",
          prompt: "Matching: The “goal” of mindfulness in DBT is primarily…",
          options: [
            { text: "Calm", correct: false },
            { text: "Choice and effectiveness", correct: true },
            { text: "Perfection", correct: false },
            { text: "Entertainment", correct: false },
          ],
        },
        {
          id: "l12q6",
          prompt: "Ordering: Choose a brief micro‑practice sequence.",
          options: [
            {
              text: "Pause → Observe breath/sound → Label once → Return to task",
              correct: true,
            },
            { text: "Multitask → Judge → Continue", correct: false },
            { text: "Avoid → Scroll → Repeat", correct: false },
            { text: "Panic → Push harder → Quit", correct: false },
          ],
        },
        {
          id: "l12q7",
          prompt: "True/False: Effectively means doing what works in context.",
          options: [
            { text: "True", correct: true },
            { text: "False", correct: false },
          ],
        },
        {
          id: "l12q8",
          prompt: "Select the best anchor for a busy hallway:",
          options: [
            { text: "Complex visualization", correct: false },
            { text: "Breath or footfall sensations", correct: true },
            { text: "Watching videos", correct: false },
            { text: "Rumination", correct: false },
          ],
        },
      ],
    },
    {
      id: "l13-diary",
      title: "Diary Cards & Skill Generalization",
      minutes: 5,
      reading:
        "Diary cards are the engine of generalization in DBT. They bring data to sessions and classes: target behaviors (e.g., self-harm urges, substance urges), emotions, skills practiced, and context notes. A good diary card is simple enough to complete daily yet rich enough to guide coaching. Typical columns include date, emotions (0–5 or 0–100), urges (0–5/0–10), skills used (check boxes for Mindfulness, DT, ER, IE subskills), and notes on wins or blocks.\n\nThe purpose is twofold: (1) track patterns—vulnerabilities (sleep, illness, substances), prompting events (conflicts, deadlines), and effective skills; and (2) inform behavioral chain analyses and solution analyses. When data are missing, DBT assumes the tool may not fit and works collaboratively to adjust: reducing fields, using a phone form, or capturing only the most relevant targets for the week.\n\nGeneralization means skills leave the classroom. Between-session coaching (in full DBT) helps clients apply skills in real time, not just in retrospective analysis. In self‑guided courses, “if–then” plans can approximate this: “If I notice X urge, then I will use Y DT skill for 90 seconds.” Pairing cues with actions strengthens habits (implementation intentions). Over time, the diary card shows upward trends in skill frequency and downward trends in target behaviors.\n",
      quiz: [
        {
          id: "l13q1",
          prompt:
            "True/False: A diary card is mainly used to punish missed skills.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l13q2",
          prompt:
            "Fill in the blank: The key role of diary cards is to bring ______ to sessions.",
          options: [
            { text: "opinions", correct: false },
            { text: "data", correct: true },
            { text: "arguments", correct: false },
            { text: "punishments", correct: false },
          ],
        },
        {
          id: "l13q3",
          prompt:
            "Select the most useful diary card field for linking to DT skills:",
          options: [
            { text: "Daily weather", correct: false },
            { text: "Urges ratings", correct: true },
            { text: "Favorite colors", correct: false },
            { text: "Random quotes", correct: false },
          ],
        },
        {
          id: "l13q4",
          prompt:
            "Scenario: You rarely complete diary cards. A DBT-consistent fix is…",
          options: [
            { text: "Add more fields", correct: false },
            {
              text: "Collaboratively simplify the form and set an if–then plan",
              correct: true,
            },
            { text: "Give up", correct: false },
            { text: "Ignore until crisis", correct: false },
          ],
        },
        {
          id: "l13q5",
          prompt: "Matching: Implementation intentions are…",
          options: [
            { text: "Values lists", correct: false },
            { text: "If–then cue-action plans", correct: true },
            { text: "Punishments", correct: false },
            { text: "Mind reading", correct: false },
          ],
        },
        {
          id: "l13q6",
          prompt: "Ordering: Steps for weekly review.",
          options: [
            {
              text: "Scan patterns → Identify targets → Plan skills → Set if–then cues",
              correct: true,
            },
            { text: "Punish misses → Guess → Avoid", correct: false },
            { text: "Start over daily → Ignore data → Hope", correct: false },
            {
              text: "Overhaul everything → Add ten goals → Quit",
              correct: false,
            },
          ],
        },
        {
          id: "l13q7",
          prompt:
            "True/False: Generalization means skills are used only in class.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l13q8",
          prompt: "Select the best tool to inform chain analysis:",
          options: [
            { text: "Diary card trends", correct: true },
            { text: "Anecdotes only", correct: false },
            { text: "Rumination logs", correct: false },
            { text: "Random guesses", correct: false },
          ],
        },
      ],
    },
    {
      id: "l14-crisis",
      title: "Crisis Planning, Safety, and Urge Management",
      minutes: 5,
      reading:
        "DBT prioritizes life-threatening behaviors first. A crisis plan is a pre-commitment to actions when risk spikes. Elements include: recognizing warning signs (thoughts, images, urges), using immediate DT tools (TIP, paced breathing, self‑soothe), contacting supports (friends, hotlines, providers), removing means (locking up medications, limiting access), and riding out urges with time-based targets (e.g., 20-minute waves). Safety planning also covers post-crisis review to reduce future risk.\n\nUrge management combines acceptance and behaviorism. Accept urges as mental events—not commands—and label them (“I’m noticing an urge to…”). Use urge surfing metaphors and time limits. Pair this with contingencies: reinforce skill use (self‑praise, token rewards, social reinforcement) and reduce reinforcement for target behaviors (change environment, block triggers).\n\nWhen crises involve others (family, roommates), have a shared script: what to say, how to validate, and what actions to avoid (e.g., escalating arguments). A plan written while calm beats ad‑hoc decisions during high arousal.\n",
      quiz: [
        {
          id: "l14q1",
          prompt:
            "True/False: Crisis plans should be improvised during the crisis.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l14q2",
          prompt: "Fill in the blank: Urges are ______, not commands.",
          options: [
            { text: "goals", correct: false },
            { text: "facts", correct: false },
            { text: "mental events", correct: true },
            { text: "orders", correct: false },
          ],
        },
        {
          id: "l14q3",
          prompt: "Select the best immediate step when risk spikes:",
          options: [
            { text: "Use TIP and paced breathing", correct: true },
            { text: "Post online", correct: false },
            { text: "Isolate without a plan", correct: false },
            { text: "Ignore warning signs", correct: false },
          ],
        },
        {
          id: "l14q4",
          prompt:
            "Scenario: Access to means increases risk. A DBT-consistent plan is…",
          options: [
            { text: "Remove or secure means", correct: true },
            { text: "Ignore the issue", correct: false },
            { text: "Hope it resolves", correct: false },
            { text: "Hide it", correct: false },
          ],
        },
        {
          id: "l14q5",
          prompt: "Matching: Reinforcing skill use primarily involves…",
          options: [
            { text: "Punishing emotions", correct: false },
            { text: "Rewarding effective behaviors", correct: true },
            { text: "Ignoring context", correct: false },
            { text: "Shaming", correct: false },
          ],
        },
        {
          id: "l14q6",
          prompt: "Ordering: Choose a crisis flow.",
          options: [
            {
              text: "Recognize signs → DT skills → Contact supports → Review later",
              correct: true,
            },
            { text: "Review → Ignore → Post online → DT", correct: false },
            { text: "Contact supports → Argue → Avoid", correct: false },
            { text: "Ruminate → React → Withdraw", correct: false },
          ],
        },
        {
          id: "l14q7",
          prompt: "True/False: Shared scripts can help families during crises.",
          options: [
            { text: "True", correct: true },
            { text: "False", correct: false },
          ],
        },
        {
          id: "l14q8",
          prompt: "Select the best description of urge surfing:",
          options: [
            { text: "Eliminating urges instantly", correct: false },
            {
              text: "Riding the wave with time limits and skills",
              correct: true,
            },
            { text: "Obeying urges", correct: false },
            { text: "Judging urges", correct: false },
          ],
        },
      ],
    },
    {
      id: "l15-coaching-tib",
      title: "Coaching, Therapy‑Interfering Behaviors & Troubleshooting",
      minutes: 5,
      reading:
        "DBT recognizes that therapy itself can be disrupted by “therapy‑interfering behaviors” (TIBs): chronic lateness, skipping homework, invalidation in session, or escalating conflict. The stance is nonjudgmental and problem‑solving. Clarify functions: Is lateness avoidance, chaos, or transportation barriers? Each function suggests different solutions (contingencies, scheduling, environmental engineering).\n\nCoaching (in full DBT) aims to support “in the moment” skill use. When unavailable, simulate with written coaching scripts: “If X, then try Y. If still elevated after 5 minutes, add Z.” Troubleshooting involves testing assumptions (skills too hard? Not salient? Wrong target?), simplifying plans, and rewarding small wins. Use shaping: reinforce approximations toward the skill (e.g., reading one paragraph mindfully before a full practice).\n\nDBT is compassionate and demanding: it assumes effort, insists on effectiveness, and changes the plan when the plan isn’t working. That flexibility is a feature, not a bug.\n",
      quiz: [
        {
          id: "l15q1",
          prompt:
            "True/False: DBT treats therapy‑interfering behaviors with punishment first.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l15q2",
          prompt: "Fill in the blank: Shaping means reinforcing ______.",
          options: [
            { text: "perfect performance", correct: false },
            { text: "approximations toward a target", correct: true },
            { text: "only outcomes", correct: false },
            { text: "avoidance", correct: false },
          ],
        },
        {
          id: "l15q3",
          prompt: "Select the best example of a TIB:",
          options: [
            { text: "Chronic lateness", correct: true },
            { text: "Using skills", correct: false },
            { text: "Completing diary cards", correct: false },
            { text: "Mindfulness practice", correct: false },
          ],
        },
        {
          id: "l15q4",
          prompt:
            "Scenario: Homework isn’t getting done. A DBT-consistent move is…",
          options: [
            { text: "Assume laziness", correct: false },
            {
              text: "Collaboratively simplify tasks and add prompts/rewards",
              correct: true,
            },
            { text: "Punish immediately", correct: false },
            { text: "Ignore it", correct: false },
          ],
        },
        {
          id: "l15q5",
          prompt: "Matching: Coaching scripts in self‑guided programs are…",
          options: [
            { text: "Therapy replacements", correct: false },
            { text: "If–then guides for skill use", correct: true },
            { text: "Punitive measures", correct: false },
            { text: "Exposure lists", correct: false },
          ],
        },
        {
          id: "l15q6",
          prompt: "Ordering: A troubleshooting loop could be…",
          options: [
            {
              text: "Define problem → Generate hypotheses → Test small changes → Reinforce wins",
              correct: true,
            },
            { text: "Punish → Avoid → Guess → Quit", correct: false },
            { text: "Judge → Complain → Repeat", correct: false },
            { text: "Ignore → Hope → Wait", correct: false },
          ],
        },
        {
          id: "l15q7",
          prompt: "True/False: Flexibility in DBT is a weakness.",
          options: [
            { text: "True", correct: false },
            { text: "False", correct: true },
          ],
        },
        {
          id: "l15q8",
          prompt: "Select the best contingency for shaping mindfulness habit:",
          options: [
            { text: "Reward brief daily practice and build up", correct: true },
            { text: "Wait for perfect 20-minute sessions", correct: false },
            { text: "All-or-nothing rules", correct: false },
            { text: "No feedback", correct: false },
          ],
        },
      ],
    },
    {
      id: `l16-ie-advanced-dearman`,
      title: `Interpersonal Effectiveness III: Advanced DEAR MAN Scenarios`,
      minutes: 6,
      reading: `Interpersonal Effectiveness III — Advanced DEAR MAN Scenarios  Why Advanced IE Matters Objectives,
Relationship, Self‑Respect alignment: In high‑stakes contexts, conflicts among aims are common. DEAR
MAN serves objective aims, GIVE safeguards the relationship, and FAST protects self‑respect. Before
the interaction, explicitly rank aims. If self‑respect is paramount (e.g., values at stake),
reinforce FAST elements even if objectives are partially deferred.  Context sensitivity: Power
differentials, culture, and history influence tone and wording. Nonverbal channels (posture, pacing,
volume) often determine uptake more than content.  Practice Plan: • Micro-practices embedded in
daily routines reinforce neural pathways associated with skillful behavior. Rotate anchors to
maintain freshness while preserving consistency in timing. Use implementation intentions (“If X
occurs, then I will do Y for 90 seconds.”) to reduce friction.  Case Study A (step-by-step): 1)
Context and prompting events are mapped concretely, avoiding vague labels. 2) Vulnerabilities
(sleep, illness, substances) are reviewed using a PLEASE checklist. 3) Specific skills are selected
based on goals and constraints. 4) Outcome metrics are predefined (urge ratings, duration,
aftereffects). 5) A brief debrief consolidates learning and updates next steps.  Troubleshooting &
Myths: • Myth: “If I validate myself, I’ll stop changing.” Reality: validation reduces shame and
frees energy for behavior change. • Myth: “Opposite Action is fake.” Reality: it is structured
exposure to feared stimuli in service of values. • When stuck, simplify the task, shorten the rep,
or change the anchor. Reward approximations (shaping).  Ethics & Scope: This curriculum is
educational. It complements—not replaces—professional care. Seek support for risk, and prioritize
safety.   DEAR MAN in Nuanced Contexts Saying No skilfully: Describe facts succinctly; Express the
impact; Assert 'No' clearly; Reinforce mutual benefits of boundaries. Mindful presence prevents
derails; Appear confident (posture, breath); Negotiate alternatives only if consistent with values.
Making requests to authority: Calibrate Assert and Reinforce to the power gap. Use data, timelines,
and shared outcomes. If negotiation stalls, agree on next steps and review timelines rather than
escalating prematurely.  Practice Plan: • Micro-practices embedded in daily routines reinforce
neural pathways associated with skillful behavior. Rotate anchors to maintain freshness while
preserving consistency in timing. Use implementation intentions (“If X occurs, then I will do Y for
90 seconds.”) to reduce friction.  Case Study A (step-by-step): 1) Context and prompting events are
mapped concretely, avoiding vague labels. 2) Vulnerabilities (sleep, illness, substances) are
reviewed using a PLEASE checklist. 3) Specific skills are selected based on goals and constraints.
4) Outcome metrics are predefined (urge ratings, duration, aftereffects). 5) A brief debrief
consolidates learning and updates next steps.  Troubleshooting & Myths: • Myth: “If I validate
myself, I’ll stop changing.” Reality: validation reduces shame and frees energy for behavior change.
• Myth: “Opposite Action is fake.” Reality: it is structured exposure to feared stimuli in service
of values. • When stuck, simplify the task, shorten the rep, or change the anchor. Reward
approximations (shaping).  Ethics & Scope: This curriculum is educational. It complements—not
replaces—professional care. Seek support for risk, and prioritize safety.   Troubleshooting When
emotions surge mid‑conversation: Use TIPP micro‑interventions (e.g., paced breathing) silently;
request a short break if needed. Return with a concise summary to re‑center the thread (Describe →
Express → Assert → Reinforce).  When the other party invalidates: Validate kernel truth without
conceding your request; re‑issue the Assert; escalate to problem‑solving or boundary setting if
necessary.  Practice Plan: • Micro-practices embedded in daily routines reinforce neural pathways
associated with skillful behavior. Rotate anchors to maintain freshness while preserving consistency
in timing. Use implementation intentions (“If X occurs, then I will do Y for 90 seconds.”) to reduce
friction.  Case Study A (step-by-step): 1) Context and prompting events are mapped concretely,
avoiding vague labels. 2) Vulnerabilities (sleep, illness, substances) are reviewed using a PLEASE
checklist. 3) Specific skills are selected based on goals and constraints. 4) Outcome metrics are
predefined (urge ratings, duration, aftereffects). 5) A brief debrief consolidates learning and
updates next steps.  Troubleshooting & Myths: • Myth: “If I validate myself, I’ll stop changing.”
Reality: validation reduces shame and frees energy for behavior change. • Myth: “Opposite Action is
fake.” Reality: it is structured exposure to feared stimuli in service of values. • When stuck,
simplify the task, shorten the rep, or change the anchor. Reward approximations (shaping).  Ethics &
Scope: This curriculum is educational. It complements—not replaces—professional care. Seek support
for risk, and prioritize safety.`,
      quiz: [
        {
          id: `l16q1`,
          prompt: `True/False: DEAR MAN primarily advances objective effectiveness.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l16q2`,
          prompt: `Fill in the blank: FAST is used to protect ______.`,
          options: [
            { text: `objectives`, correct: false },
            { text: `self‑respect`, correct: true },
            { text: `relationships`, correct: false },
            { text: `speed`, correct: false },
          ],
        },
        {
          id: `l16q3`,
          prompt: `Select the best tactic when a discussion derails:`,
          options: [
            { text: `Repeat your point louder`, correct: false },
            {
              text: `Use Mindful presence and restate Describe → Express → Assert`,
              correct: true,
            },
            { text: `Abandon your request`, correct: false },
            { text: `Apologize for existing`, correct: false },
          ],
        },
        {
          id: `l16q4`,
          prompt: `Scenario (best response): Your manager rejects a reasonable request abruptly. A DBT‑consistent next step is…`,
          options: [
            { text: `Quit immediately`, correct: false },
            {
              text: `Validate a kernel of truth and re‑assert with data`,
              correct: true,
            },
            { text: `Argue at length`, correct: false },
            { text: `Send a sarcastic email`, correct: false },
          ],
        },
        {
          id: `l16q5`,
          prompt: `Matching: Which package emphasizes relationship harmony?`,
          options: [
            { text: `DEAR MAN`, correct: false },
            { text: `GIVE`, correct: true },
            { text: `FAST`, correct: false },
            { text: `PLEASE`, correct: false },
          ],
        },
        {
          id: `l16q6`,
          prompt: `Ordering: Choose the canonical DEAR flow.`,
          options: [
            { text: `Express → Describe → Assert → Reinforce`, correct: false },
            { text: `Describe → Express → Assert → Reinforce`, correct: true },
            { text: `Assert → Reinforce → Describe → Express`, correct: false },
            { text: `Reinforce → Assert → Express → Describe`, correct: false },
          ],
        },
        {
          id: `l16q7`,
          prompt: `True/False: Negotiation in DEAR MAN means abandoning your values.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l16q8`,
          prompt: `Fill in the blank: Appearing ______ can increase uptake even if you feel unsure.`,
          options: [
            { text: `confident`, correct: true },
            { text: `silent`, correct: false },
            { text: `angry`, correct: false },
            { text: `resigned`, correct: false },
          ],
        },
        {
          id: `l16q9`,
          prompt: `Scenario (ordering): In a heated moment, what’s a micro‑sequence to re‑center?`,
          options: [
            { text: `Judge → escalate → insist`, correct: false },
            {
              text: `Pause breath → summarize → re‑assert → invite negotiation`,
              correct: true,
            },
            { text: `Leave immediately`, correct: false },
            { text: `Switch topics repeatedly`, correct: false },
          ],
        },
        {
          id: `l16q10`,
          prompt: `Select the best synthesis: When self‑respect is at stake, emphasize…`,
          options: [
            { text: `GIVE`, correct: false },
            { text: `DEAR MAN only`, correct: false },
            { text: `FAST elements within your request`, correct: true },
            { text: `Silence`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l17-er-exposure`,
      title: `Emotion Regulation IV: Exposure & Opposite Action in Depth`,
      minutes: 6,
      reading: `Emotion Regulation IV — Exposure, Opposite Action, and Learning  Why exposure works in DBT
Prediction error and inhibitory learning: Opposite Action functions as graded exposure to feared
cues and contexts. Learning occurs when the feared outcome fails to occur or occurs less
catastrophically than predicted.  Designing exposure: Define a ladder of increasingly challenging
steps; ensure safety and values alignment. Track urges, predictions, and outcomes to consolidate
learning.  Practice Plan: • Micro-practices embedded in daily routines reinforce neural pathways
associated with skillful behavior. Rotate anchors to maintain freshness while preserving consistency
in timing. Use implementation intentions (“If X occurs, then I will do Y for 90 seconds.”) to reduce
friction.  Case Study A (step-by-step): 1) Context and prompting events are mapped concretely,
avoiding vague labels. 2) Vulnerabilities (sleep, illness, substances) are reviewed using a PLEASE
checklist. 3) Specific skills are selected based on goals and constraints. 4) Outcome metrics are
predefined (urge ratings, duration, aftereffects). 5) A brief debrief consolidates learning and
updates next steps.  Troubleshooting & Myths: • Myth: “If I validate myself, I’ll stop changing.”
Reality: validation reduces shame and frees energy for behavior change. • Myth: “Opposite Action is
fake.” Reality: it is structured exposure to feared stimuli in service of values. • When stuck,
simplify the task, shorten the rep, or change the anchor. Reward approximations (shaping).  Ethics &
Scope: This curriculum is educational. It complements—not replaces—professional care. Seek support
for risk, and prioritize safety.   Crafting an Exposure Ladder Parameters: dose, frequency,
intensity: Start with tolerable steps; repeat frequently; lengthen duration as tolerated. Combine
with mindfulness to notice cues and urges without fusing.  When exposure is contraindicated: When
risk is high or consent is lacking, stabilize first with DT and PLEASE before resuming.  Practice
Plan: • Micro-practices embedded in daily routines reinforce neural pathways associated with
skillful behavior. Rotate anchors to maintain freshness while preserving consistency in timing. Use
implementation intentions (“If X occurs, then I will do Y for 90 seconds.”) to reduce friction.
Case Study A (step-by-step): 1) Context and prompting events are mapped concretely, avoiding vague
labels. 2) Vulnerabilities (sleep, illness, substances) are reviewed using a PLEASE checklist. 3)
Specific skills are selected based on goals and constraints. 4) Outcome metrics are predefined (urge
ratings, duration, aftereffects). 5) A brief debrief consolidates learning and updates next steps.
Troubleshooting & Myths: • Myth: “If I validate myself, I’ll stop changing.” Reality: validation
reduces shame and frees energy for behavior change. • Myth: “Opposite Action is fake.” Reality: it
is structured exposure to feared stimuli in service of values. • When stuck, simplify the task,
shorten the rep, or change the anchor. Reward approximations (shaping).  Ethics & Scope: This
curriculum is educational. It complements—not replaces—professional care. Seek support for risk, and
prioritize safety.   Evaluating Results Behavioral markers: Avoidance drops, values‑consistent
actions increase. Urge intensity and duration decrease across sessions.  Cognitive/affective
markers: Catastrophic predictions weaken; confidence grows; tolerance for discomfort expands.
Practice Plan: • Micro-practices embedded in daily routines reinforce neural pathways associated
with skillful behavior. Rotate anchors to maintain freshness while preserving consistency in timing.
Use implementation intentions (“If X occurs, then I will do Y for 90 seconds.”) to reduce friction.
Case Study A (step-by-step): 1) Context and prompting events are mapped concretely, avoiding vague
labels. 2) Vulnerabilities (sleep, illness, substances) are reviewed using a PLEASE checklist. 3)
Specific skills are selected based on goals and constraints. 4) Outcome metrics are predefined (urge
ratings, duration, aftereffects). 5) A brief debrief consolidates learning and updates next steps.
Troubleshooting & Myths: • Myth: “If I validate myself, I’ll stop changing.” Reality: validation
reduces shame and frees energy for behavior change. • Myth: “Opposite Action is fake.” Reality: it
is structured exposure to feared stimuli in service of values. • When stuck, simplify the task,
shorten the rep, or change the anchor. Reward approximations (shaping).  Ethics & Scope: This
curriculum is educational. It complements—not replaces—professional care. Seek support for risk, and
prioritize safety.`,
      quiz: [
        {
          id: `l17q1`,
          prompt: `True/False: Opposite Action in DBT is a form of exposure.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l17q2`,
          prompt: `Fill in the blank: Exposure learning relies on ______ error (expectations vs outcomes).`,
          options: [
            { text: `syntax`, correct: false },
            { text: `prediction`, correct: true },
            { text: `memory`, correct: false },
            { text: `language`, correct: false },
          ],
        },
        {
          id: `l17q3`,
          prompt: `Select the best first step when designing a ladder:`,
          options: [
            { text: `Start with the hardest step`, correct: false },
            { text: `Define small, tolerable steps`, correct: true },
            { text: `Skip planning`, correct: false },
            { text: `Avoid tracking`, correct: false },
          ],
        },
        {
          id: `l17q4`,
          prompt: `Scenario: Fear of brief class comments. The most DBT‑consistent starter is…`,
          options: [
            { text: `Lead the entire meeting`, correct: false },
            { text: `Say a prepared 15‑second comment once`, correct: true },
            { text: `Skip class`, correct: false },
            { text: `Email complaints`, correct: false },
          ],
        },
        {
          id: `l17q5`,
          prompt: `Matching: Which parameter governs how often you practice?`,
          options: [
            { text: `Dose`, correct: false },
            { text: `Frequency`, correct: true },
            { text: `Intensity`, correct: false },
            { text: `Safety`, correct: false },
          ],
        },
        {
          id: `l17q6`,
          prompt: `Ordering: Choose a progression for graded exposure.`,
          options: [
            { text: `Avoid → Panic → Quit`, correct: false },
            {
              text: `Short approach → Repeat → Lengthen → Generalize`,
              correct: true,
            },
            { text: `Generalize → Quit → Avoid`, correct: false },
            { text: `Guess → Act → Suppress`, correct: false },
          ],
        },
        {
          id: `l17q7`,
          prompt: `True/False: Exposure is used even when immediate risk is high.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l17q8`,
          prompt: `Select the best indicator of progress:`,
          options: [
            { text: `Urge intensity remains maximal`, correct: false },
            { text: `Avoidance slowly decreases`, correct: true },
            { text: `You never feel discomfort`, correct: false },
            { text: `You cancel practice`, correct: false },
          ],
        },
        {
          id: `l17q9`,
          prompt: `Fill in the blank: Mindfulness during exposure helps you notice ______ without fusing.`,
          options: [
            { text: `sensations and urges`, correct: true },
            { text: `TV shows`, correct: false },
            { text: `others’ mistakes`, correct: false },
            { text: `unrelated tasks`, correct: false },
          ],
        },
        {
          id: `l17q10`,
          prompt: `Scenario: Predictions keep failing to update. A DBT‑consistent move is to…`,
          options: [
            { text: `Increase avoidance`, correct: false },
            {
              text: `Review the data and adjust beliefs incrementally`,
              correct: true,
            },
            { text: `Blame yourself`, correct: false },
            { text: `Stop tracking`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l18-mindfulness-integration`,
      title: `Mindfulness III: Integrating Practice into Daily Life`,
      minutes: 6,
      reading: `Mindfulness III — Integrating Practice into Daily Life  From formal to informal practice
Micro‑practices: Use 30–60‑second reps tied to cues (doors, taps, notifications). Rotate anchors
(breath, sound, contact points) to match context and preference.  Task design: Reduce
task‑switching; batch similar tasks; use checklists to preserve attention for what matters.
Practice Plan: • Micro-practices embedded in daily routines reinforce neural pathways associated
with skillful behavior. Rotate anchors to maintain freshness while preserving consistency in timing.
Use implementation intentions (“If X occurs, then I will do Y for 90 seconds.”) to reduce friction.
Case Study A (step-by-step): 1) Context and prompting events are mapped concretely, avoiding vague
labels. 2) Vulnerabilities (sleep, illness, substances) are reviewed using a PLEASE checklist. 3)
Specific skills are selected based on goals and constraints. 4) Outcome metrics are predefined (urge
ratings, duration, aftereffects). 5) A brief debrief consolidates learning and updates next steps.
Troubleshooting & Myths: • Myth: “If I validate myself, I’ll stop changing.” Reality: validation
reduces shame and frees energy for behavior change. • Myth: “Opposite Action is fake.” Reality: it
is structured exposure to feared stimuli in service of values. • When stuck, simplify the task,
shorten the rep, or change the anchor. Reward approximations (shaping).  Ethics & Scope: This
curriculum is educational. It complements—not replaces—professional care. Seek support for risk, and
prioritize safety.   Handling Obstacles Boredom and agitation: Label and continue; switch anchors;
shorten reps; pair with brief movement if helpful.  Social contexts: Eyes‑open practice; soft gaze;
mindful listening (observe, describe internally, participate).  Practice Plan: • Micro-practices
embedded in daily routines reinforce neural pathways associated with skillful behavior. Rotate
anchors to maintain freshness while preserving consistency in timing. Use implementation intentions
(“If X occurs, then I will do Y for 90 seconds.”) to reduce friction.  Case Study A (step-by-step):
1) Context and prompting events are mapped concretely, avoiding vague labels. 2) Vulnerabilities
(sleep, illness, substances) are reviewed using a PLEASE checklist. 3) Specific skills are selected
based on goals and constraints. 4) Outcome metrics are predefined (urge ratings, duration,
aftereffects). 5) A brief debrief consolidates learning and updates next steps.  Troubleshooting &
Myths: • Myth: “If I validate myself, I’ll stop changing.” Reality: validation reduces shame and
frees energy for behavior change. • Myth: “Opposite Action is fake.” Reality: it is structured
exposure to feared stimuli in service of values. • When stuck, simplify the task, shorten the rep,
or change the anchor. Reward approximations (shaping).  Ethics & Scope: This curriculum is
educational. It complements—not replaces—professional care. Seek support for risk, and prioritize
safety.   Wise Mind on Demand Rapid access sequence: Pause → Name context → Feel breath at nostrils
→ Drop judgment → Ask: 'What would be effective now?'  Measuring benefits: Look for reduced
reactivity, shorter recovery times, and clearer choices—not constant calm.  Practice Plan: • Micro-
practices embedded in daily routines reinforce neural pathways associated with skillful behavior.
Rotate anchors to maintain freshness while preserving consistency in timing. Use implementation
intentions (“If X occurs, then I will do Y for 90 seconds.”) to reduce friction.  Case Study A
(step-by-step): 1) Context and prompting events are mapped concretely, avoiding vague labels. 2)
Vulnerabilities (sleep, illness, substances) are reviewed using a PLEASE checklist. 3) Specific
skills are selected based on goals and constraints. 4) Outcome metrics are predefined (urge ratings,
duration, aftereffects). 5) A brief debrief consolidates learning and updates next steps.
Troubleshooting & Myths: • Myth: “If I validate myself, I’ll stop changing.” Reality: validation
reduces shame and frees energy for behavior change. • Myth: “Opposite Action is fake.” Reality: it
is structured exposure to feared stimuli in service of values. • When stuck, simplify the task,
shorten the rep, or change the anchor. Reward approximations (shaping).  Ethics & Scope: This
curriculum is educational. It complements—not replaces—professional care. Seek support for risk, and
prioritize safety.`,
      quiz: [
        {
          id: `l18q1`,
          prompt: `True/False: Micro‑practices of 30–60 seconds can effectively build mindfulness capacity.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l18q2`,
          prompt: `Fill in the blank: One strategy to reduce overload is to reduce ______ switching.`,
          options: [
            { text: `task`, correct: true },
            { text: `color`, correct: false },
            { text: `seat`, correct: false },
            { text: `music`, correct: false },
          ],
        },
        {
          id: `l18q3`,
          prompt: `Select the best anchor for a noisy hallway:`,
          options: [
            { text: `Complex visualization`, correct: false },
            { text: `Sound or footfall sensations`, correct: true },
            { text: `Rumination`, correct: false },
            { text: `TV`, correct: false },
          ],
        },
        {
          id: `l18q4`,
          prompt: `Scenario: Boredom arises during practice. A DBT‑consistent move is…`,
          options: [
            { text: `Judge it and stop`, correct: false },
            {
              text: `Label boredom and continue or change anchor`,
              correct: true,
            },
            { text: `Increase multitasking`, correct: false },
            { text: `Demand instant calm`, correct: false },
          ],
        },
        {
          id: `l18q5`,
          prompt: `Matching: Wise Mind access emphasizes…`,
          options: [
            { text: `Avoidance`, correct: false },
            { text: `Synthesis of data and values`, correct: true },
            { text: `Black‑and‑white thinking`, correct: false },
            { text: `Distraction`, correct: false },
          ],
        },
        {
          id: `l18q6`,
          prompt: `Ordering: Choose a brief access sequence.`,
          options: [
            {
              text: `Pause → Name context → Breath → Drop judgment → Choose effective action`,
              correct: true,
            },
            { text: `Judge → React → Avoid`, correct: false },
            { text: `Scroll → Compare → Ruminate`, correct: false },
            { text: `Decide → Avoid → Guess`, correct: false },
          ],
        },
        {
          id: `l18q7`,
          prompt: `True/False: Constant calm is the primary aim of mindfulness in DBT.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l18q8`,
          prompt: `Fill in the blank: Mindful listening uses Observe, ______, and Participate.`,
          options: [
            { text: `Control`, correct: false },
            { text: `Describe`, correct: true },
            { text: `Predict`, correct: false },
            { text: `Direct`, correct: false },
          ],
        },
        {
          id: `l18q9`,
          prompt: `Select the best measure of progress:`,
          options: [
            { text: `Shorter recovery time after triggers`, correct: true },
            { text: `Never feeling emotions`, correct: false },
            { text: `More multitasking`, correct: false },
            { text: `Higher rumination`, correct: false },
          ],
        },
        {
          id: `l18q10`,
          prompt: `Scenario: Social context makes eyes‑closed practice awkward. You can…`,
          options: [
            { text: `Avoid practice entirely`, correct: false },
            {
              text: `Use eyes‑open, soft gaze, and breath at contact points`,
              correct: true,
            },
            { text: `Judge others`, correct: false },
            { text: `Speak rapidly`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l19-dt-advanced`,
      title: `Distress Tolerance III: Advanced Crisis Strategies`,
      minutes: 6,
      reading: `Distress Tolerance III — Advanced Crisis Strategies  When crises repeat Refining TIPP and IMPROVE:
Sequence physiological down‑regulation quickly, then use meaning and one‑thing‑in‑the‑moment to ride
out waves. Implement time‑boxed rounds (e.g., 90 seconds paced breathing + cold water + brief
imagery).  Environment design: Pre‑stage kits: ice packs, soothing scents, headphones, cue cards
with steps and numbers. Remove or block cues that escalate (disable certain notifications during
vulnerable windows).  Practice Plan: • Micro-practices embedded in daily routines reinforce neural
pathways associated with skillful behavior. Rotate anchors to maintain freshness while preserving
consistency in timing. Use implementation intentions (“If X occurs, then I will do Y for 90
seconds.”) to reduce friction.  Case Study A (step-by-step): 1) Context and prompting events are
mapped concretely, avoiding vague labels. 2) Vulnerabilities (sleep, illness, substances) are
reviewed using a PLEASE checklist. 3) Specific skills are selected based on goals and constraints.
4) Outcome metrics are predefined (urge ratings, duration, aftereffects). 5) A brief debrief
consolidates learning and updates next steps.  Troubleshooting & Myths: • Myth: “If I validate
myself, I’ll stop changing.” Reality: validation reduces shame and frees energy for behavior change.
• Myth: “Opposite Action is fake.” Reality: it is structured exposure to feared stimuli in service
of values. • When stuck, simplify the task, shorten the rep, or change the anchor. Reward
approximations (shaping).  Ethics & Scope: This curriculum is educational. It complements—not
replaces—professional care. Seek support for risk, and prioritize safety.   Pros & Cons with Data
Make consequences vivid: Write short-term vs long-term consequences for acting on urges and for
skills use. Review before high‑risk windows so choices are primed.  Willingness over Willfulness:
Check posture (open palms), soften breath, and re‑commit—turning the mind again and again.  Practice
Plan: • Micro-practices embedded in daily routines reinforce neural pathways associated with
skillful behavior. Rotate anchors to maintain freshness while preserving consistency in timing. Use
implementation intentions (“If X occurs, then I will do Y for 90 seconds.”) to reduce friction.
Case Study A (step-by-step): 1) Context and prompting events are mapped concretely, avoiding vague
labels. 2) Vulnerabilities (sleep, illness, substances) are reviewed using a PLEASE checklist. 3)
Specific skills are selected based on goals and constraints. 4) Outcome metrics are predefined (urge
ratings, duration, aftereffects). 5) A brief debrief consolidates learning and updates next steps.
Troubleshooting & Myths: • Myth: “If I validate myself, I’ll stop changing.” Reality: validation
reduces shame and frees energy for behavior change. • Myth: “Opposite Action is fake.” Reality: it
is structured exposure to feared stimuli in service of values. • When stuck, simplify the task,
shorten the rep, or change the anchor. Reward approximations (shaping).  Ethics & Scope: This
curriculum is educational. It complements—not replaces—professional care. Seek support for risk, and
prioritize safety.   Aftercare and Review Post‑crisis debrief: Briefly chain the episode; locate
earlier skill insertion points; update kits and plans. Reinforce any effective step, however small,
to increase future use (shaping).  Practice Plan: • Micro-practices embedded in daily routines
reinforce neural pathways associated with skillful behavior. Rotate anchors to maintain freshness
while preserving consistency in timing. Use implementation intentions (“If X occurs, then I will do
Y for 90 seconds.”) to reduce friction.  Case Study A (step-by-step): 1) Context and prompting
events are mapped concretely, avoiding vague labels. 2) Vulnerabilities (sleep, illness, substances)
are reviewed using a PLEASE checklist. 3) Specific skills are selected based on goals and
constraints. 4) Outcome metrics are predefined (urge ratings, duration, aftereffects). 5) A brief
debrief consolidates learning and updates next steps.  Troubleshooting & Myths: • Myth: “If I
validate myself, I’ll stop changing.” Reality: validation reduces shame and frees energy for
behavior change. • Myth: “Opposite Action is fake.” Reality: it is structured exposure to feared
stimuli in service of values. • When stuck, simplify the task, shorten the rep, or change the
anchor. Reward approximations (shaping).  Ethics & Scope: This curriculum is educational. It
complements—not replaces—professional care. Seek support for risk, and prioritize safety.`,
      quiz: [
        {
          id: `l19q1`,
          prompt: `True/False: A pre‑staged DT kit can reduce time to skill use.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l19q2`,
          prompt: `Fill in the blank: Willingness contrasts with ______.`,
          options: [
            { text: `wisdom`, correct: false },
            { text: `willfulness`, correct: true },
            { text: `worthiness`, correct: false },
            { text: `weighting`, correct: false },
          ],
        },
        {
          id: `l19q3`,
          prompt: `Select the best step for repeated crises:`,
          options: [
            {
              text: `Chain the episode and refine earlier skill points`,
              correct: true,
            },
            { text: `Ignore patterns`, correct: false },
            { text: `Increase self‑criticism`, correct: false },
            { text: `Wait it out indefinitely`, correct: false },
          ],
        },
        {
          id: `l19q4`,
          prompt: `Scenario: You tend to escalate at night. A DBT‑consistent move is…`,
          options: [
            {
              text: `Disable triggering notifications during that window`,
              correct: true,
            },
            { text: `Increase scrolling`, correct: false },
            { text: `Invite arguments`, correct: false },
            { text: `Rely on willpower`, correct: false },
          ],
        },
        {
          id: `l19q5`,
          prompt: `Matching: Which element belongs to IMPROVE?`,
          options: [
            { text: `Meaning`, correct: true },
            { text: `Metrics`, correct: false },
            { text: `Marathon`, correct: false },
            { text: `Measurement`, correct: false },
          ],
        },
        {
          id: `l19q6`,
          prompt: `Ordering: Choose a rapid sequence to down‑regulate.`,
          options: [
            {
              text: `Cold water → paced breathing → self‑soothe → imagery`,
              correct: true,
            },
            { text: `Argue → post online → continue conflict`, correct: false },
            { text: `Ruminate → snack → scroll`, correct: false },
            { text: `Wait → wait → wait`, correct: false },
          ],
        },
        {
          id: `l19q7`,
          prompt: `True/False: Pros & Cons are written only after urges pass.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l19q8`,
          prompt: `Fill in the blank: Reinforcing even small skill use is called ______.`,
          options: [
            { text: `masking`, correct: false },
            { text: `shaping`, correct: true },
            { text: `shielding`, correct: false },
            { text: `shunting`, correct: false },
          ],
        },
        {
          id: `l19q9`,
          prompt: `Select the best descriptor of a DT kit:`,
          options: [
            { text: `An improvised plan`, correct: false },
            { text: `A prepared set of tools and cues`, correct: true },
            { text: `A punishment list`, correct: false },
            { text: `A secret diary`, correct: false },
          ],
        },
        {
          id: `l19q10`,
          prompt: `Scenario: After using skills you still feel bad. A DBT‑consistent review is…`,
          options: [
            { text: `Skills failed; give up`, correct: false },
            {
              text: `Debrief briefly, reinforce what helped, and update plan`,
              correct: true,
            },
            { text: `Blame yourself`, correct: false },
            { text: `Erase the diary card`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l20-synthesis-1`,
      title: `Synthesis I: Combining Skills Across DBT Modules`,
      minutes: 6,
      reading: `Synthesis I — Combining Skills Across DBT Modules  Why integration matters Complex scenarios: Real
life rarely presents single‑module problems; you may need mindfulness, DT, ER, and IE in one
episode. Integration prevents over‑reliance on any one tool and highlights the dialectic: acceptance
+ change.  Planning across time: Use diary data to anticipate vulnerable windows and schedule
skills; coordinate interpersonal plans with emotion regulation tasks.  Practice Plan: • Micro-
practices embedded in daily routines reinforce neural pathways associated with skillful behavior.
Rotate anchors to maintain freshness while preserving consistency in timing. Use implementation
intentions (“If X occurs, then I will do Y for 90 seconds.”) to reduce friction.  Case Study A
(step-by-step): 1) Context and prompting events are mapped concretely, avoiding vague labels. 2)
Vulnerabilities (sleep, illness, substances) are reviewed using a PLEASE checklist. 3) Specific
skills are selected based on goals and constraints. 4) Outcome metrics are predefined (urge ratings,
duration, aftereffects). 5) A brief debrief consolidates learning and updates next steps.
Troubleshooting & Myths: • Myth: “If I validate myself, I’ll stop changing.” Reality: validation
reduces shame and frees energy for behavior change. • Myth: “Opposite Action is fake.” Reality: it
is structured exposure to feared stimuli in service of values. • When stuck, simplify the task,
shorten the rep, or change the anchor. Reward approximations (shaping).  Ethics & Scope: This
curriculum is educational. It complements—not replaces—professional care. Seek support for risk, and
prioritize safety.   Designing Cross‑Module Plans Before, during, after framework: Before: PLEASE,
Coping Ahead, mastery; During: TIPP + mindfulness; After: chain/solution analysis and reinforcement.
Role of validation: Self‑validation reduces shame and increases bandwidth for change steps; pair
with clear behavior targets.  Practice Plan: • Micro-practices embedded in daily routines reinforce
neural pathways associated with skillful behavior. Rotate anchors to maintain freshness while
preserving consistency in timing. Use implementation intentions (“If X occurs, then I will do Y for
90 seconds.”) to reduce friction.  Case Study A (step-by-step): 1) Context and prompting events are
mapped concretely, avoiding vague labels. 2) Vulnerabilities (sleep, illness, substances) are
reviewed using a PLEASE checklist. 3) Specific skills are selected based on goals and constraints.
4) Outcome metrics are predefined (urge ratings, duration, aftereffects). 5) A brief debrief
consolidates learning and updates next steps.  Troubleshooting & Myths: • Myth: “If I validate
myself, I’ll stop changing.” Reality: validation reduces shame and frees energy for behavior change.
• Myth: “Opposite Action is fake.” Reality: it is structured exposure to feared stimuli in service
of values. • When stuck, simplify the task, shorten the rep, or change the anchor. Reward
approximations (shaping).  Ethics & Scope: This curriculum is educational. It complements—not
replaces—professional care. Seek support for risk, and prioritize safety.   Measuring Effectiveness
Define metrics: Track urges, duration, and values‑consistent actions; compare week over week to
detect small wins.  Iterate quickly: Small adjustments beat large overhauls; retain what works, drop
what doesn’t—effectiveness over ideology.  Practice Plan: • Micro-practices embedded in daily
routines reinforce neural pathways associated with skillful behavior. Rotate anchors to maintain
freshness while preserving consistency in timing. Use implementation intentions (“If X occurs, then
I will do Y for 90 seconds.”) to reduce friction.  Case Study A (step-by-step): 1) Context and
prompting events are mapped concretely, avoiding vague labels. 2) Vulnerabilities (sleep, illness,
substances) are reviewed using a PLEASE checklist. 3) Specific skills are selected based on goals
and constraints. 4) Outcome metrics are predefined (urge ratings, duration, aftereffects). 5) A
brief debrief consolidates learning and updates next steps.  Troubleshooting & Myths: • Myth: “If I
validate myself, I’ll stop changing.” Reality: validation reduces shame and frees energy for
behavior change. • Myth: “Opposite Action is fake.” Reality: it is structured exposure to feared
stimuli in service of values. • When stuck, simplify the task, shorten the rep, or change the
anchor. Reward approximations (shaping).  Ethics & Scope: This curriculum is educational. It
complements—not replaces—professional care. Seek support for risk, and prioritize safety.`,
      quiz: [
        {
          id: `l20q1`,
          prompt: `True/False: Real‑world problems often require multiple DBT modules together.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l20q2`,
          prompt: `Fill in the blank: A common planning frame is ______, during, and after.`,
          options: [
            { text: `before`, correct: true },
            { text: `between`, correct: false },
            { text: `behind`, correct: false },
            { text: `beneath`, correct: false },
          ],
        },
        {
          id: `l20q3`,
          prompt: `Select the best description of integration:`,
          options: [
            { text: `Over‑rely on one favorite skill`, correct: false },
            { text: `Combine skills pragmatically in sequence`, correct: true },
            { text: `Avoid planning`, correct: false },
            { text: `Use no metrics`, correct: false },
          ],
        },
        {
          id: `l20q4`,
          prompt: `Scenario: A tough conversation triggers urges. A cross‑module plan might start with…`,
          options: [
            {
              text: `PLEASE and Coping Ahead before the meeting`,
              correct: true,
            },
            { text: `No preparation`, correct: false },
            { text: `Rely on willpower`, correct: false },
            { text: `Avoid attending`, correct: false },
          ],
        },
        {
          id: `l20q5`,
          prompt: `Matching: Which skill reduces shame to enable change?`,
          options: [
            { text: `Validation`, correct: true },
            { text: `Rumination`, correct: false },
            { text: `Suppression`, correct: false },
            { text: `Catastrophizing`, correct: false },
          ],
        },
        {
          id: `l20q6`,
          prompt: `Ordering: Choose a full‑episode sequence.`,
          options: [
            {
              text: `Before: PLEASE/Coping Ahead → During: TIPP + mindfulness → After: chain/solution analysis`,
              correct: true,
            },
            { text: `During only: improvise`, correct: false },
            { text: `After only: complain`, correct: false },
            { text: `Random order`, correct: false },
          ],
        },
        {
          id: `l20q7`,
          prompt: `True/False: Effectiveness means doing what works toward goals.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l20q8`,
          prompt: `Fill in the blank: Diary data help ______ vulnerable windows.`,
          options: [
            { text: `anticipate`, correct: true },
            { text: `ignore`, correct: false },
            { text: `erase`, correct: false },
            { text: `deny`, correct: false },
          ],
        },
        {
          id: `l20q9`,
          prompt: `Select the best way to iterate plans:`,
          options: [
            { text: `Large overhauls weekly`, correct: false },
            { text: `Small targeted adjustments based on data`, correct: true },
            { text: `No changes ever`, correct: false },
            { text: `Copy others`, correct: false },
          ],
        },
        {
          id: `l20q10`,
          prompt: `Scenario: Integration plan reduces urges by 20%. The DBT move is…`,
          options: [
            { text: `Declare failure`, correct: false },
            { text: `Reinforce gains and tweak next step`, correct: true },
            { text: `Scrap plan`, correct: false },
            { text: `Increase self‑criticism`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l21-er-advanced`,
      title: `Emotion Regulation V: Exposure and Opposite Action in Depth`,
      minutes: 6,
      reading: `Emotion Regulation V — Exposure and Opposite Action in Depth  Deepening Practice Combining opposite
action with prolonged exposure: Helps solidify new learning Supports resilience in challenging
contexts  Practice Application: Embed practice in real situations, track progress with diary cards,
and adapt plans when barriers arise.   Safety Checks When to delay exposure: High risk, no supports,
or medical instability  Practice Application: Embed practice in real situations, track progress with
diary cards, and adapt plans when barriers arise.`,
      quiz: [
        {
          id: `l21q1`,
          prompt: `True/False: Exposure should only be attempted when safety is established.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l21q2`,
          prompt: `Fill in the blank: Opposite action is often paired with ______ exposure.`,
          options: [
            { text: `imaginal`, correct: false },
            { text: `graded`, correct: true },
            { text: `random`, correct: false },
            { text: `none`, correct: false },
          ],
        },
        {
          id: `l21q3`,
          prompt: `Best indicator of progress is:`,
          options: [
            { text: `Increased avoidance`, correct: false },
            { text: `Decreased distress over time`, correct: true },
            { text: `More panic`, correct: false },
            { text: `Avoiding diary cards`, correct: false },
          ],
        },
        {
          id: `l21q4`,
          prompt: `Scenario: Client predicts 100% embarrassment. After 10 trials, nothing catastrophic occurs. This is called…`,
          options: [
            { text: `Catastrophizing`, correct: false },
            { text: `Prediction error learning`, correct: true },
            { text: `Rumination`, correct: false },
            { text: `Flooding`, correct: false },
          ],
        },
        {
          id: `l21q5`,
          prompt: `True/False: Opposite Action is unrelated to values.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l21q6`,
          prompt: `Fill in the blank: Repeated ______ helps consolidate inhibitory learning.`,
          options: [
            { text: `practice`, correct: true },
            { text: `avoidance`, correct: false },
            { text: `rumination`, correct: false },
            { text: `suppression`, correct: false },
          ],
        },
        {
          id: `l21q7`,
          prompt: `Which strategy is contraindicated during exposure?`,
          options: [
            { text: `Mindfulness`, correct: false },
            { text: `Safety plan`, correct: false },
            { text: `Skipping supports`, correct: true },
            { text: `Recording urges`, correct: false },
          ],
        },
        {
          id: `l21q8`,
          prompt: `Scenario: Fear of calling strangers. First ladder step is…`,
          options: [
            { text: `Make 50 calls`, correct: false },
            { text: `Call a store for hours`, correct: false },
            { text: `Practice with a safe friend`, correct: true },
            { text: `Avoid entirely`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l22-ie-boundaries`,
      title: `Interpersonal Effectiveness IV: Navigating Power and Boundaries`,
      minutes: 6,
      reading: `Interpersonal Effectiveness IV — Navigating Power and Boundaries  Understanding Context Power
differentials: Adapt tone and strategy to authority relationships  Practice Application: Embed
practice in real situations, track progress with diary cards, and adapt plans when barriers arise.
Boundary Setting Healthy boundaries: Clear no statements; reinforcement of self-respect  Practice
Application: Embed practice in real situations, track progress with diary cards, and adapt plans
when barriers arise.`,
      quiz: [
        {
          id: `l22q1`,
          prompt: `True/False: Interpersonal effectiveness skills change depending on context.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l22q2`,
          prompt: `Fill in the blank: Boundaries protect ______.`,
          options: [
            { text: `relationships`, correct: false },
            { text: `self-respect`, correct: true },
            { text: `rumination`, correct: false },
            { text: `avoidance`, correct: false },
          ],
        },
        {
          id: `l22q3`,
          prompt: `Select the best first step in asserting a boundary:`,
          options: [
            { text: `Shout loudly`, correct: false },
            { text: `Use Describe and Express calmly`, correct: true },
            { text: `Avoid contact`, correct: false },
            { text: `Blame others`, correct: false },
          ],
        },
        {
          id: `l22q4`,
          prompt: `Scenario: Boss pressures overtime. DBT-consistent option is…`,
          options: [
            { text: `Say yes always`, correct: false },
            {
              text: `Describe workload, assert limits, negotiate if possible`,
              correct: true,
            },
            { text: `Quit instantly`, correct: false },
            { text: `Ignore boss`, correct: false },
          ],
        },
        {
          id: `l22q5`,
          prompt: `True/False: Power differentials never affect DBT skills use.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l22q6`,
          prompt: `Fill in the blank: GIVE skills primarily protect the ______.`,
          options: [
            { text: `objective`, correct: false },
            { text: `relationship`, correct: true },
            { text: `self`, correct: false },
            { text: `rumination`, correct: false },
          ],
        },
        {
          id: `l22q7`,
          prompt: `Matching: Which acronym preserves self-respect?`,
          options: [
            { text: `DEAR`, correct: false },
            { text: `FAST`, correct: true },
            { text: `GIVE`, correct: false },
            { text: `TIPP`, correct: false },
          ],
        },
        {
          id: `l22q8`,
          prompt: `Ordering: Effective boundary step order.`,
          options: [
            { text: `Describe→Express→Assert→Reinforce`, correct: true },
            { text: `Reinforce→Assert→Describe→Express`, correct: false },
            { text: `Avoid→Blame→Quit`, correct: false },
            { text: `Guess→React→Ignore`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l23-diary-cards-2`,
      title: `Diary Cards II: Advanced Tracking and Pattern Recognition`,
      minutes: 6,
      reading: `Diary Cards II — Advanced Tracking and Pattern Recognition  Why track? Pattern recognition: Reveals
triggers, vulnerabilities, and progress trends  Practice Application: Embed practice in real
situations, track progress with diary cards, and adapt plans when barriers arise.   Advanced Uses
Custom fields: Urges, skill use, emotions, environment factors  Practice Application: Embed practice
in real situations, track progress with diary cards, and adapt plans when barriers arise.`,
      quiz: [
        {
          id: `l23q1`,
          prompt: `True/False: Diary cards help identify long-term patterns.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l23q2`,
          prompt: `Fill in the blank: Adding custom ______ improves diary card tracking.`,
          options: [
            { text: `fields`, correct: true },
            { text: `colors`, correct: false },
            { text: `rumors`, correct: false },
            { text: `blanks`, correct: false },
          ],
        },
        {
          id: `l23q3`,
          prompt: `Select the best time to fill a diary card:`,
          options: [
            { text: `Once a month`, correct: false },
            { text: `Immediately before bed daily`, correct: true },
            { text: `Never`, correct: false },
            { text: `Only in crisis`, correct: false },
          ],
        },
        {
          id: `l23q4`,
          prompt: `Scenario: Card shows urges rise when sleep is poor. DBT-consistent step is…`,
          options: [
            { text: `Ignore it`, correct: false },
            { text: `Improve sleep with PLEASE skills`, correct: true },
            { text: `Stop tracking`, correct: false },
            { text: `Blame others`, correct: false },
          ],
        },
        {
          id: `l23q5`,
          prompt: `True/False: Diary cards only track emotions.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l23q6`,
          prompt: `Fill in the blank: Diary card data supports ______ analysis.`,
          options: [
            { text: `chain`, correct: true },
            { text: `avoidance`, correct: false },
            { text: `rumination`, correct: false },
            { text: `none`, correct: false },
          ],
        },
        {
          id: `l23q7`,
          prompt: `Best way to use diary cards:`,
          options: [
            { text: `Hide them`, correct: false },
            { text: `Share with therapist/coach`, correct: true },
            { text: `Ignore patterns`, correct: false },
            { text: `Judge yourself`, correct: false },
          ],
        },
        {
          id: `l23q8`,
          prompt: `Scenario: You see increased skill use. DBT move is…`,
          options: [
            { text: `Reinforce progress`, correct: true },
            { text: `Criticize`, correct: false },
            { text: `Erase cards`, correct: false },
            { text: `Quit`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l24-skills-coaching`,
      title: `Skills Coaching: Generalization Beyond Sessions`,
      minutes: 6,
      reading: `Skills Coaching — Generalization Beyond Sessions  Role of Coaching Phone coaching: Bridge between
sessions and real life  Practice Application: Embed practice in real situations, track progress with
diary cards, and adapt plans when barriers arise.   Strategies Brief, targeted contact: Validate,
cue skill, avoid therapy in coaching  Practice Application: Embed practice in real situations, track
progress with diary cards, and adapt plans when barriers arise.`,
      quiz: [
        {
          id: `l24q1`,
          prompt: `True/False: DBT coaching is an extension of therapy.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l24q2`,
          prompt: `Fill in the blank: Coaching is meant to cue ______ use.`,
          options: [
            { text: `avoidance`, correct: false },
            { text: `skill`, correct: true },
            { text: `rumination`, correct: false },
            { text: `panic`, correct: false },
          ],
        },
        {
          id: `l24q3`,
          prompt: `Best principle of coaching:`,
          options: [
            { text: `Be lengthy`, correct: false },
            { text: `Be brief and targeted`, correct: true },
            { text: `Replace therapy`, correct: false },
            { text: `Ignore context`, correct: false },
          ],
        },
        {
          id: `l24q4`,
          prompt: `Scenario: Client calls in crisis. DBT-consistent coaching is…`,
          options: [
            { text: `Validate and cue skills briefly`, correct: true },
            { text: `Do full therapy session`, correct: false },
            { text: `Ignore call`, correct: false },
            { text: `Criticize`, correct: false },
          ],
        },
        {
          id: `l24q5`,
          prompt: `True/False: Coaching should never validate.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l24q6`,
          prompt: `Fill in the blank: Coaching avoids full ______ work.`,
          options: [
            { text: `therapy`, correct: true },
            { text: `skill`, correct: false },
            { text: `validation`, correct: false },
            { text: `practice`, correct: false },
          ],
        },
        {
          id: `l24q7`,
          prompt: `Matching: Which element belongs to coaching?`,
          options: [
            { text: `Long lectures`, correct: false },
            { text: `Brief targeted cueing`, correct: true },
            { text: `Rumination`, correct: false },
            { text: `Avoidance`, correct: false },
          ],
        },
        {
          id: `l24q8`,
          prompt: `Ordering: Coaching call steps.`,
          options: [
            { text: `Validate→Cue skill→Encourage`, correct: true },
            { text: `Criticize→Ignore→Hang up`, correct: false },
            { text: `Therapy→Homework→Lecture`, correct: false },
            { text: `Rumination→Avoid→Blame`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l25-synthesis-2`,
      title: `Synthesis II: Coordinating Skills in Complex Scenarios`,
      minutes: 6,
      reading: `Synthesis II — Coordinating Skills in Complex Scenarios  Integration Cross-module coordination:
Combine mindfulness, ER, DT, and IE in complex cases  Practice Application: Embed practice in real
situations, track progress with diary cards, and adapt plans when barriers arise.   Case Application
Sample scenario: High emotion conflict needing multiple skills  Practice Application: Embed practice
in real situations, track progress with diary cards, and adapt plans when barriers arise.`,
      quiz: [
        {
          id: `l25q1`,
          prompt: `True/False: Real-life cases often need multiple DBT modules simultaneously.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l25q2`,
          prompt: `Fill in the blank: ______ data helps identify vulnerable moments for synthesis.`,
          options: [
            { text: `diary`, correct: true },
            { text: `rumor`, correct: false },
            { text: `random`, correct: false },
            { text: `avoidance`, correct: false },
          ],
        },
        {
          id: `l25q3`,
          prompt: `Best reason for synthesis:`,
          options: [
            { text: `Overuse one skill`, correct: false },
            { text: `Integrate across modules`, correct: true },
            { text: `Ignore modules`, correct: false },
            { text: `Use none`, correct: false },
          ],
        },
        {
          id: `l25q4`,
          prompt: `Scenario: Crisis with relationship conflict. DBT synthesis would…`,
          options: [
            { text: `Combine DT for urges and IE for dialogue`, correct: true },
            { text: `Ignore skills`, correct: false },
            { text: `Blame`, correct: false },
            { text: `Quit`, correct: false },
          ],
        },
        {
          id: `l25q5`,
          prompt: `True/False: Metrics are irrelevant in synthesis.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l25q6`,
          prompt: `Fill in the blank: Small targeted adjustments support ______.`,
          options: [
            { text: `iteration`, correct: true },
            { text: `rumination`, correct: false },
            { text: `suppression`, correct: false },
            { text: `avoidance`, correct: false },
          ],
        },
        {
          id: `l25q7`,
          prompt: `Matching: Which skill module addresses relationship aims?`,
          options: [
            { text: `DT`, correct: false },
            { text: `IE`, correct: true },
            { text: `ER`, correct: false },
            { text: `Mindfulness`, correct: false },
          ],
        },
        {
          id: `l25q8`,
          prompt: `Ordering: A synthesis plan might run…`,
          options: [
            {
              text: `Prepare with PLEASE→Use DT in crisis→Apply IE in talk→Review with ER`,
              correct: true,
            },
            { text: `Skip→Avoid→Blame`, correct: false },
            { text: `React→Suppress→Judge`, correct: false },
            { text: `Panic→Quit→Forget`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l26-life-worth-living`,
      title: `Emotion Regulation VI: Building a Life Worth Living`,
      minutes: 6,
      reading: `Emotion Regulation VI — Building a Life Worth Living  Core Goal Life worth living: Use DBT skills to
move toward long-term values and goals  Practice Application: Embed practice in daily routines,
anticipate barriers, track data, and adapt strategies as needed.   Strategies Mastery and positive
events: Increase activities that build mastery and joy  Practice Application: Embed practice in
daily routines, anticipate barriers, track data, and adapt strategies as needed.`,
      quiz: [
        {
          id: `l26q1`,
          prompt: `True/False: A core goal of DBT is building a life worth living.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l26q2`,
          prompt: `Fill in the blank: Increasing ______ events can build positive emotions.`,
          options: [
            { text: `negative`, correct: false },
            { text: `avoidance`, correct: false },
            { text: `positive`, correct: true },
            { text: `rumination`, correct: false },
          ],
        },
        {
          id: `l26q3`,
          prompt: `Select the best example of mastery activity:`,
          options: [
            { text: `Scrolling endlessly`, correct: false },
            { text: `Completing a project`, correct: true },
            { text: `Avoiding all tasks`, correct: false },
            { text: `Staying passive`, correct: false },
          ],
        },
        {
          id: `l26q4`,
          prompt: `Scenario: Client feels empty. DBT-consistent step is…`,
          options: [
            { text: `Plan positive activities`, correct: true },
            { text: `Judge themselves`, correct: false },
            { text: `Do nothing`, correct: false },
            { text: `Withdraw completely`, correct: false },
          ],
        },
        {
          id: `l26q5`,
          prompt: `True/False: Mastery activities must be perfect.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l26q6`,
          prompt: `Fill in the blank: A life worth living is defined by ______ values.`,
          options: [
            { text: `society’s`, correct: false },
            { text: `personal`, correct: true },
            { text: `random`, correct: false },
            { text: `none`, correct: false },
          ],
        },
        {
          id: `l26q7`,
          prompt: `Matching: Which DBT concept emphasizes long-term goals?`,
          options: [
            { text: `TIPP`, correct: false },
            { text: `PLEASE`, correct: false },
            { text: `Life Worth Living`, correct: true },
            { text: `Opposite Action`, correct: false },
          ],
        },
        {
          id: `l26q8`,
          prompt: `Ordering: Steps to build joy.`,
          options: [
            {
              text: `Identify values→Plan events→Practice→Reinforce`,
              correct: true,
            },
            { text: `Reinforce→Quit→Avoid`, correct: false },
            { text: `Judge→Withdraw→Suppress`, correct: false },
            { text: `Skip→Forget→Blame`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l27-conflict`,
      title: `Interpersonal Effectiveness V: Handling Conflict Constructively`,
      minutes: 6,
      reading: `Interpersonal Effectiveness V — Handling Conflict Constructively  Conflict Skills Staying effective:
Use DEAR MAN, GIVE, FAST while regulating emotions in conflict  Practice Application: Embed practice
in daily routines, anticipate barriers, track data, and adapt strategies as needed.   Repair After
conflict: Validate, repair relationship, review skills  Practice Application: Embed practice in
daily routines, anticipate barriers, track data, and adapt strategies as needed.`,
      quiz: [
        {
          id: `l27q1`,
          prompt: `True/False: Conflict is inevitable in relationships.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l27q2`,
          prompt: `Fill in the blank: Effective conflict management uses DEAR MAN, GIVE, and ______.`,
          options: [
            { text: `FAST`, correct: true },
            { text: `PLEASE`, correct: false },
            { text: `TIPP`, correct: false },
            { text: `ACCEPTS`, correct: false },
          ],
        },
        {
          id: `l27q3`,
          prompt: `Best step after conflict:`,
          options: [
            { text: `Validate, repair, review`, correct: true },
            { text: `Ignore forever`, correct: false },
            { text: `Blame`, correct: false },
            { text: `Withdraw`, correct: false },
          ],
        },
        {
          id: `l27q4`,
          prompt: `Scenario: Friend upset after disagreement. DBT move is…`,
          options: [
            { text: `Validate feelings, reassert respectfully`, correct: true },
            { text: `Avoid friend`, correct: false },
            { text: `Escalate conflict`, correct: false },
            { text: `Quit relationship`, correct: false },
          ],
        },
        {
          id: `l27q5`,
          prompt: `True/False: Validation weakens your position.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l27q6`,
          prompt: `Fill in the blank: Reviewing skills after conflict supports ______.`,
          options: [
            { text: `learning`, correct: true },
            { text: `rumination`, correct: false },
            { text: `avoidance`, correct: false },
            { text: `panic`, correct: false },
          ],
        },
        {
          id: `l27q7`,
          prompt: `Matching: Which skill emphasizes self-respect?`,
          options: [
            { text: `FAST`, correct: true },
            { text: `GIVE`, correct: false },
            { text: `DEAR MAN`, correct: false },
            { text: `TIPP`, correct: false },
          ],
        },
        {
          id: `l27q8`,
          prompt: `Ordering: Effective conflict steps.`,
          options: [
            { text: `Regulate→Validate→Assert→Repair`, correct: true },
            { text: `Ignore→Blame→Withdraw`, correct: false },
            { text: `Judge→Suppress→Avoid`, correct: false },
            { text: `Explode→Quit→Forget`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l28-radical-acceptance`,
      title: `Distress Tolerance IV: Radical Acceptance in Practice`,
      minutes: 6,
      reading: `Distress Tolerance IV — Radical Acceptance in Practice  Concept Acceptance: Fully acknowledge
reality as it is, without approval or resignation  Practice Application: Embed practice in daily
routines, anticipate barriers, track data, and adapt strategies as needed.   Practicing Exercises:
Notice judgments, soften posture, practice willingness repeatedly  Practice Application: Embed
practice in daily routines, anticipate barriers, track data, and adapt strategies as needed.`,
      quiz: [
        {
          id: `l28q1`,
          prompt: `True/False: Radical acceptance means approving of painful events.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l28q2`,
          prompt: `Fill in the blank: Radical acceptance is about acknowledging ______.`,
          options: [
            { text: `fantasy`, correct: false },
            { text: `reality`, correct: true },
            { text: `rumors`, correct: false },
            { text: `avoidance`, correct: false },
          ],
        },
        {
          id: `l28q3`,
          prompt: `Best practice step:`,
          options: [
            { text: `Notice judgments and release them`, correct: true },
            { text: `Suppress emotions`, correct: false },
            { text: `Blame self`, correct: false },
            { text: `Deny reality`, correct: false },
          ],
        },
        {
          id: `l28q4`,
          prompt: `Scenario: Chronic pain persists. DBT-consistent step is…`,
          options: [
            { text: `Accept reality while managing it`, correct: true },
            { text: `Deny pain`, correct: false },
            { text: `Blame`, correct: false },
            { text: `Panic`, correct: false },
          ],
        },
        {
          id: `l28q5`,
          prompt: `True/False: Radical acceptance happens instantly.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l28q6`,
          prompt: `Fill in the blank: Radical acceptance requires repeated ______.`,
          options: [
            { text: `judgments`, correct: false },
            { text: `willingness`, correct: true },
            { text: `avoidance`, correct: false },
            { text: `suppression`, correct: false },
          ],
        },
        {
          id: `l28q7`,
          prompt: `Matching: Which skill uses acceptance of reality?`,
          options: [
            { text: `Opposite Action`, correct: false },
            { text: `Radical Acceptance`, correct: true },
            { text: `TIPP`, correct: false },
            { text: `PLEASE`, correct: false },
          ],
        },
        {
          id: `l28q8`,
          prompt: `Ordering: Practice steps.`,
          options: [
            { text: `Notice→Soften→Willingness`, correct: true },
            { text: `Judge→Blame→Avoid`, correct: false },
            { text: `Explode→Suppress→Forget`, correct: false },
            { text: `Skip→Withdraw→Suppress`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l29-mindfulness-advanced`,
      title: `Mindfulness IV: Advanced Applications`,
      minutes: 6,
      reading: `Mindfulness IV — Advanced Applications  Everyday Integration Mindful activity: Eating, walking,
conversation with full presence  Practice Application: Embed practice in daily routines, anticipate
barriers, track data, and adapt strategies as needed.   Advanced Practices Noticing thoughts: See
thoughts as mental events, not facts  Practice Application: Embed practice in daily routines,
anticipate barriers, track data, and adapt strategies as needed.`,
      quiz: [
        {
          id: `l29q1`,
          prompt: `True/False: Mindful eating is a practice of everyday integration.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l29q2`,
          prompt: `Fill in the blank: DBT mindfulness treats thoughts as mental ______, not facts.`,
          options: [
            { text: `events`, correct: true },
            { text: `errors`, correct: false },
            { text: `rumors`, correct: false },
            { text: `none`, correct: false },
          ],
        },
        {
          id: `l29q3`,
          prompt: `Best advanced practice:`,
          options: [
            { text: `Observe thoughts as passing events`, correct: true },
            { text: `Fuse with thoughts`, correct: false },
            { text: `Judge constantly`, correct: false },
            { text: `Avoid mindfulness`, correct: false },
          ],
        },
        {
          id: `l29q4`,
          prompt: `Scenario: Mind wanders in conversation. DBT-consistent step is…`,
          options: [
            { text: `Return to listening mindfully`, correct: true },
            { text: `Ignore person`, correct: false },
            { text: `Judge self`, correct: false },
            { text: `Quit`, correct: false },
          ],
        },
        {
          id: `l29q5`,
          prompt: `True/False: Advanced mindfulness eliminates all distraction.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l29q6`,
          prompt: `Fill in the blank: Walking mindfully emphasizes full ______.`,
          options: [
            { text: `presence`, correct: true },
            { text: `avoidance`, correct: false },
            { text: `judgment`, correct: false },
            { text: `panic`, correct: false },
          ],
        },
        {
          id: `l29q7`,
          prompt: `Matching: Which skill treats thoughts as events?`,
          options: [
            { text: `Radical Acceptance`, correct: false },
            { text: `Mindfulness`, correct: true },
            { text: `FAST`, correct: false },
            { text: `TIPP`, correct: false },
          ],
        },
        {
          id: `l29q8`,
          prompt: `Ordering: Steps in mindful conversation.`,
          options: [
            { text: `Observe→Describe→Participate`, correct: true },
            { text: `Judge→Blame→Suppress`, correct: false },
            { text: `Avoid→Ignore→Panic`, correct: false },
            { text: `Forget→Withdraw→Suppress`, correct: false },
          ],
        },
      ],
    },
    {
      id: `l30-synthesis-3`,
      title: `Synthesis III: Comprehensive Case Integration`,
      minutes: 6,
      reading: `Synthesis III — Comprehensive Case Integration  Combining Modules Full case work: Integrate ER, DT,
IE, and Mindfulness in one scenario  Practice Application: Embed practice in daily routines,
anticipate barriers, track data, and adapt strategies as needed.   Review Learning consolidation:
Reflect, reinforce, plan next steps  Practice Application: Embed practice in daily routines,
anticipate barriers, track data, and adapt strategies as needed.`,
      quiz: [
        {
          id: `l30q1`,
          prompt: `True/False: Real-world cases often require synthesis of multiple DBT modules.`,
          options: [
            { text: `True`, correct: true },
            { text: `False`, correct: false },
          ],
        },
        {
          id: `l30q2`,
          prompt: `Fill in the blank: Comprehensive integration combines ER, DT, IE, and ______.`,
          options: [
            { text: `Mindfulness`, correct: true },
            { text: `Avoidance`, correct: false },
            { text: `Rumination`, correct: false },
            { text: `Suppression`, correct: false },
          ],
        },
        {
          id: `l30q3`,
          prompt: `Best synthesis step:`,
          options: [
            { text: `Plan across modules`, correct: true },
            { text: `Ignore modules`, correct: false },
            { text: `Use none`, correct: false },
            { text: `Overuse one`, correct: false },
          ],
        },
        {
          id: `l30q4`,
          prompt: `Scenario: Client in high conflict. DBT move is…`,
          options: [
            { text: `Combine DT, IE, ER, and mindfulness`, correct: true },
            { text: `Avoid skills`, correct: false },
            { text: `Blame`, correct: false },
            { text: `Withdraw`, correct: false },
          ],
        },
        {
          id: `l30q5`,
          prompt: `True/False: Review after case is optional in DBT.`,
          options: [
            { text: `True`, correct: false },
            { text: `False`, correct: true },
          ],
        },
        {
          id: `l30q6`,
          prompt: `Fill in the blank: Consolidation of learning requires ______.`,
          options: [
            { text: `reflection`, correct: true },
            { text: `avoidance`, correct: false },
            { text: `panic`, correct: false },
            { text: `rumination`, correct: false },
          ],
        },
        {
          id: `l30q7`,
          prompt: `Matching: Which skill addresses crisis urges?`,
          options: [
            { text: `IE`, correct: false },
            { text: `DT`, correct: true },
            { text: `Mindfulness`, correct: false },
            { text: `FAST`, correct: false },
          ],
        },
        {
          id: `l30q8`,
          prompt: `Ordering: Synthesis steps.`,
          options: [
            { text: `Plan→Apply→Review`, correct: true },
            { text: `Judge→Suppress→Avoid`, correct: false },
            { text: `Skip→Forget→Blame`, correct: false },
            { text: `Explode→Quit→Withdraw`, correct: false },
          ],
        },
      ],
    },
  ]
};
