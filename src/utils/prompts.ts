// TODO - all needed prompts to generate story - entities - questions - evidences

export function generateCaseFile(): string {
  const prompt = `
  # CRIME MYSTERY GENERATION FRAMEWORK  
Generate a complete, solved crime story using this structure. The example provided demonstrates required detail level.

## 1. CRIME TYPE  
[Required: Select one]  
- Murder  
- Theft  
- Vandalism  
- Fraud  

## 2. CRIME SCENE  
**Core Details:**  
- Date: [ISO8601, e.g. "2023-11-15"]  
- Time: [HH:MM±Δmin, e.g. "22:15±15min"]  
- Location:  
  - Address: [Full address]  
  - Specific Area: [Exact crime spot]  
- Method: [How crime was committed]  

**Evidence (Minimum 2 per type):**  
- Physical: [e.g. "Bloody glove", "Broken lock"]  
- Digital: [e.g. "Deleted logs 22:00-22:30"]  
- Testimonial: [e.g. "Heard arguing"]  

## 3. TIMELINE  
1. 24h Before: [Victim's routine activities]  
2. 1h Before: [Key pre-crime events]  
3. Crime Window: [15-30min precise timing]  
4. Discovery: [How crime was found]  

## 4. ENTITIES  
**All Characters Include:**  
- Name, Age, Gender, Role  
- Relation to Crime: [From predefined list]  
- Known Associations: [Connections to others]  

**Type-Specific Requirements:**  
- **Victim:**  
  - Time of Death/Last Seen: [Must fit timeline]  
- **Suspects (3-5):**  
  - Alibi: [Time-stamped account]  
  - Opportunity: [How they could do it]  
- **Witnesses (1-3):**  
  - Testimony: [What they observed]  
  - Reliability Score: [0.0-1.0]  

## 5. CONSTRAINTS  
- NO red herrings - all clues must matter  
- Must be solvable via 3+ logical paths  
- Max 1 subtle clue requiring deduction
- Min 1000 words story length
- language basic english
  `
  return prompt
}

