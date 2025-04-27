// TODO - all needed prompts to generate story - entities - questions - evidences

export function generateCaseFile({
  storyLength = 1000,
  language = "basic English",
  suspectCount = 3,
  witnessCount = 1,
  crimeTypes = ["Murder", "Theft", "Vandalism", "Fraud"],
}: {
  storyLength?: number;
  language?: string;
  suspectCount?: number;
  witnessCount?: number;
  crimeTypes?: string[];
}): string {
return `
# CRIME MYSTERY GENERATION FRAMEWORK

Generate a complete, logically solvable crime story using the structure below.  
**Story language:** ${language}  
**Minimum story length:** ${storyLength} words

## 1. CRIME TYPE  
[Select one from the list:]  
- ${crimeTypes.join("\n- ")}

## 2. CRIME SCENE  
**Core Details:**  
- Date: [ISO8601 format, e.g. "2023-11-15"]  
- Time: [HH:MM±Δmin, e.g. "22:15±15min"]  
- Location:  
  - Address: [Full address]  
  - Specific Area: [Exact crime spot]  
- Method: [How the crime was committed]  

**Evidence (Minimum 2 per type):**  
- Physical: [e.g. "Bloody glove", "Broken lock"]  
- Digital: [e.g. "Deleted logs from 22:00–22:30"]  
- Testimonial: [e.g. "Heard arguing"]  

## 3. TIMELINE  
1. 24h Before: [Victim's routine]  
2. 1h Before: [Key events]  
3. Crime Window: [15–30 min duration]  
4. Discovery: [How it was found]  

## 4. ENTITIES  
**Each character must include:**  
- Name, Age, Gender, Role  
- Relation to Crime  
- Known Associations  

**By type:**  
- **Victim:**  
  - Time of Death or Last Seen  
- **Suspects (${suspectCount} total):**  
  - Alibi + Opportunity  
- **Witnesses (${witnessCount} total):**  
  - Testimony + Reliability Score (0.0–1.0)

## 5. CONSTRAINTS
- No red herrings — all clues must matter  
- Solvable via at least 3 logical paths  
- Max 1 subtle/deductive-only clue

## FINAL INSTRUCTION  
Only return the complete generated story. Do not include explanations, analysis, or questions.
`;
}
