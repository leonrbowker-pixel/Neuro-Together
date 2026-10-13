// Forms, School & Doctor Master Data

window.arfidGuideData = {
    badge: 'Plain-English Feeding & Sensory Guide',
    title: 'ARFID (Avoidant/Restrictive Food Intake Disorder) Guide',
    description: 'ARFID is not "picky eating", bad behaviour, or a child being stubborn. It is a recognised feeding condition where a child’s brain perceives certain foods as genuinely unsafe or physically unbearable. Unlike other eating disorders, ARFID has nothing to do with body image or weight—it is driven by sensory overload, past fear, or missing hunger signals.',
    subtypes: [
        {
            icon: '🤢',
            title: '1. Sensory Overload (Texture, Smell & Sight)',
            text: 'To a child with sensory ARFID, lumpy, wet, mixed, or strong-smelling foods feel genuinely revolting or painful in the mouth. Even looking at or smelling an unfamiliar food on someone else’s plate can trigger an involuntary gag reflex or panic.'
        },
        {
            icon: '😨',
            title: '2. Fear of Choking, Gagging or Being Sick',
            text: 'Often triggered after a bad bout of tummy bug, reflux, or choking on a piece of food. The child’s brain locks onto the memory and convinces them that swallowing certain foods will make them choke or vomit again.'
        },
        {
            icon: '📉',
            title: '3. Missing Hunger Signals (Interoception)',
            text: 'Many neurodivergent children do not feel normal tummy rumbles until they are shaking or melting down. Eating feels like an exhausting, boring chore rather than something enjoyable, so they simply forget or refuse to eat.'
        }
    ],
    whyBeigeBox: {
        title: '🍞 Why Do So Many Children Only Eat "Beige" & Brand-Specific Foods?',
        points: [
            'Predictability Equals Safety: A fresh blueberry might be sweet, sour, firm, or mushy—every bite is a gamble. A specific brand of chicken nuggets, plain crackers, crisps, or dry toast tastes and crunches the exact same way every single time.',
            'Super-Taster Senses: Neurodivergent children immediately spot tiny changes in recipe, packaging, or cooking time (e.g. a slightly browned chip or a supermarket own-brand swap) and will reject it because it no longer matches their safe mental template.',
            'Foods Touching on the Plate: Mixed textures (like sauce on pasta or gravy touching mash) make it impossible for their brain to predict what the mouthful will feel like, triggering instant refusal.'
        ]
    },
    supportiveTactics: [
        { title: 'Protect "Safe Foods" Without Guilt', text: 'Always serve at least one guaranteed safe food at every meal. Fed is always best—even if they eat the same brand of nuggets or plain pasta every day for months.' },
        { title: 'Drop All Mealtime Pressure', text: 'Avoid "just try one bite", bargaining for pudding, or watching them eat. Anxiety releases adrenaline, which physically shuts down the stomach and triggers the gag reflex.' },
        { title: 'Use Divider Plates or Side Bowls', text: 'Keep different foods completely separate so wet and dry textures never touch. Put any new "learning" food on a separate tiny plate across the table with zero expectation to eat it.' },
        { title: 'Gentle "Food Chaining"', text: 'Take tiny, logical steps from a food they already trust. For example: favourite brand of waffle -> different shape potato waffle -> oven chip -> homemade wedge.' },
        { title: 'Make Mealtimes Low-Sensory', text: 'Let them wear headphones, watch a tablet, or eat away from strong kitchen cooking smells. Distracting an anxious brain often makes swallowing much easier.' }
    ],
    avoidTactics: [
        { title: '"They will eat when they get hungry enough"', text: 'This works for typical fussy eaters, NEVER for ARFID. A child with ARFID will genuinely starve themselves to the point of hospitalisation rather than eat an unsafe food.' },
        { title: 'Hiding vegetables or medicine inside safe foods', text: 'If they detect a strange taste or texture inside their favourite food, they will feel betrayed, lose trust in that safe food, and drop it permanently ("food jagging").' },
        { title: 'Withholding snacks or rewards until they finish dinner', text: 'Punishing a sensory reflex increases mealtime trauma and makes them dread coming to the table.' },
        { title: 'Making a big fuss when they try something new', text: 'Even positive cheering ("Look, you ate a pea!") can make a self-conscious or PDA-profile child feel scrutinised and refuse to try again.' }
    ],
    advocacyTips: [
        { title: '🩺 When to Speak to Your GP or Dietitian', text: 'Ask for a referral to a Paediatric Dietitian or Feeding Clinic if your child has fewer than 10–15 safe foods, is losing weight, looks pale/exhausted, pockets food in their cheeks (choking risk), or suffers chronic constipation.' },
        { title: '🏫 School Lunchtime Adjustments (EHCP & SEN)', text: 'Schools must make reasonable adjustments under the Equality Act. Ask for permission to bring a packed lunch of exclusively safe foods (even if it breaks "healthy lunchbox" policies), a quiet space away from noisy dinner halls, and a guarantee that staff will never force them to finish their plate.' },
        { title: '💷 Recording ARFID on Your DLA Form (Question 59)', text: 'On your DLA claim, detail how long you spend preparing separate meals, coaxing them to eat and drink, watching for food pocketing/choking hazards, and managing vitamin drops or constipation medication.' }
    ]
};

window.screenerQuestionsMaster = [
    { id: 1, cat: 'Sensory', text: 'Distressed by unexpected loud noises, specific pitches, or noisy crowded environments.' },
    { id: 2, cat: 'Sensory', text: 'Extremely sensitive to clothing textures, tags, seams, or refuses certain fabrics.' },
    { id: 3, cat: 'Sensory', text: 'Engages in intense sensory seeking (spinning, crashing into furniture, chewing non-food objects).' },
    { id: 4, cat: 'Sensory', text: 'Significant food aversions based purely on texture, smell, colour, or temperature.' },
    { id: 5, cat: 'Sensory', text: 'Shows an unusually high or low tolerance to pain, cold, or heat.' },
    { id: 6, cat: 'Sensory', text: 'Becomes visually overwhelmed by fluorescent lighting, busy patterns, or bright glare.' },
    { id: 7, cat: 'Sensory', text: 'Struggles with balance, clumsy movements, or poor body awareness in space (proprioception).' },
    { id: 8, cat: 'Executive Function', text: 'Extreme difficulty initiating non-preferred tasks without intense 1-to-1 prompt scaffolding.' },
    { id: 9, cat: 'Executive Function', text: 'Hyperfocuses deeply on special interest topics to the exclusion of basic needs (eating, drinking, toileting).' },
    { id: 10, cat: 'Executive Function', text: 'Consistently misplaces essential daily items (shoes, coat, school bag, equipment).' },
    { id: 11, cat: 'Executive Function', text: 'Struggles with multi-step sequential verbal instructions (forgets step 2 and 3).' },
    { id: 12, cat: 'Executive Function', text: 'Shows significant time blindness (struggles to gauge time, transition between activities smoothly).' },
    { id: 13, cat: 'Executive Function', text: 'Exhibits physical restlessness (fidgeting, pacing, rocking, or constantly shifting position).' },
    { id: 14, cat: 'Executive Function', text: 'Impulsive decision-making without foreseeing immediate physical danger or social impact.' },
    { id: 15, cat: 'Executive Function', text: 'Requires excessive mental effort and becomes fatigued quickly by typical school routines.' },
    { id: 16, cat: 'Communication', text: 'Takes language literally (struggles with sarcasm, idioms, or implied contextual subtext).' },
    { id: 17, cat: 'Communication', text: 'Finds small talk challenging; prefers deep conversations focused purely on shared factual interests.' },
    { id: 18, cat: 'Communication', text: 'Difficulty sustaining reciprocal back-and-forth social conversations.' },
    { id: 19, cat: 'Communication', text: 'Avoids direct eye contact or finds maintaining eye contact uncomfortable/draining.' },
    { id: 20, cat: 'Communication', text: 'Struggles to interpret peer social cues, body language, facial expressions, or boundaries.' },
    { id: 21, cat: 'Communication', text: 'Prefers parallel play or solitary activities rather than unstructured group games.' },
    { id: 22, cat: 'Communication', text: 'Experiences severe social exhaustion after school or public gatherings ("masking drop").' },
    { id: 23, cat: 'Emotional', text: 'Transitions between tasks trigger intense distress, shutdowns, or explosive meltdowns.' },
    { id: 24, cat: 'Emotional', text: 'Perceives ordinary daily demands (brushing teeth, getting dressed) as intense nervous system threats.' },
    { id: 25, cat: 'Emotional', text: 'Shows intense perfectionism and intense emotional collapse over perceived mistakes.' },
    { id: 26, cat: 'Emotional', text: 'Experiences rapid mood dysregulation with prolonged recovery times following sensory overload.' },
    { id: 27, cat: 'Emotional', text: 'Uses elaborate distraction, negotiation, or physical avoidance to evade everyday requests.' },
    { id: 28, cat: 'Emotional', text: 'Internalises distress quietly at school or public settings, collapsing into meltdowns at home ("coke bottle effect").' },
    { id: 29, cat: 'Emotional', text: 'Highly sensitive to perceived criticism, rejection, or unfairness (Rejection Sensitive Dysphoria).' },
    { id: 30, cat: 'Emotional', text: 'Relies heavily on rigid daily routines or rituals to manage baseline internal anxiety.' }
];