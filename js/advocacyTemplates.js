const advocacyTemplates = [
    {
        id: 'ehc_request',
        title: 'Request EHC Needs Assessment',
        subtitle: 'Direct request to the Local Authority (Section 36)',
        description: 'Use this to formally ask your council for an EHC Needs Assessment without needing permission from the school.',
        legalBasis: 'Children and Families Act 2014, Section 36(1)',
        fields: [
            { key: 'councilName', label: 'Local Authority / Council Name', placeholder: 'e.g. Lancashire County Council', type: 'text' },
            { key: 'schoolName', label: 'Current School / Setting', placeholder: 'e.g. St Peter\'s Primary School', type: 'text' },
            { key: 'mainConcerns', label: 'Summary of Key Needs & Barriers', placeholder: 'e.g. High anxiety during transitions, sensory overload in cafeteria, falling behind in literacy despite interventions.', type: 'textarea' }
        ],
        generate: (data, child) => `To: SEN Team, ${data.councilName || '[Local Authority Name]'}

Date: ${new Date().toLocaleDateString('en-GB')}

Subject: Formal Request for an Education, Health and Care (EHC) Needs Assessment
Child: ${child.name || '[Child Name]'} (DOB: ${child.dob || '[Date of Birth]'})
Current School: ${data.schoolName || '[School Name]'}

Dear Sir / Madam,

I am writing as the parent of ${child.name || '[Child Name]'} to formally request an Education, Health and Care (EHC) Needs Assessment under Section 36(1) of the Children and Families Act 2014.

${child.name || 'My child'} has special educational needs that require special educational provision beyond what is ordinarily available in their mainstream setting. 

Summary of Needs and Concerns:
${data.mainConcerns || '[Describe primary challenges and learning needs]'}

Under Section 36(8) of the Children and Families Act 2014, the Local Authority must secure an EHC needs assessment if:
1. The child has or may have special educational needs, and
2. It may be necessary for special educational provision to be made in accordance with an EHC plan.

Please note that having a formal medical diagnosis is not a legal prerequisite for conducting this assessment.

I look forward to receiving your response within the statutory 6-week timeframe, which concludes on ${new Date(Date.now() + 42 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}.

Yours sincerely,

[Parent/Carer Name]
[Contact Information]`
    },
    {
        id: 'reasonable_adjustments',
        title: 'Request Reasonable Adjustments',
        subtitle: 'Sensory & learning accommodations under Equality Act',
        description: 'Ask the school to put vital adjustments in place (quiet spaces, sensory tools, transition buffers) to prevent disadvantage.',
        legalBasis: 'Equality Act 2010, Section 20',
        fields: [
            { key: 'headteacherName', label: 'Headteacher / SENCO Name', placeholder: 'e.g. Mrs Smith', type: 'text' },
            { key: 'requestedAdjustments', label: 'Required Adjustments', placeholder: 'e.g. Ear defenders allowed in noisy halls, 5-minute early release between classes to avoid hallway crowding, access to a sensory reset space.', type: 'textarea' }
        ],
        generate: (data, child) => `To: ${data.headteacherName || 'Headteacher / SENCO'}

Date: ${new Date().toLocaleDateString('en-GB')}

Subject: Formal Request for Reasonable Adjustments under the Equality Act 2010
Child: ${child.name || '[Child Name]'}

Dear ${data.headteacherName || 'Sir / Madam'},

I am writing regarding my child, ${child.name || '[Child Name]'}, to request reasonable adjustments to ensure they are not placed at a substantial disadvantage in school.

Under Section 20 of the Equality Act 2010, schools have an anticipatory legal duty to take reasonable steps to prevent disabled pupils and pupils with neurodivergent conditions from experiencing substantial disadvantage compared to their peers.

The specific adjustments required to support ${child.name || 'my child'} are:
${data.requestedAdjustments || '[List specific environmental and routine adjustments]'}

These adjustments are necessary to prevent sensory dysregulation and support their emotional wellbeing and education.

Please confirm in writing by ${new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')} when these accommodations will be implemented.

Yours sincerely,

[Parent/Carer Name]
[Contact Information]`
    }
];