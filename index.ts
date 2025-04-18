enum LearningStatus {
    Mastered = "mastered",
    Practicing = "practicing",
    Curious = "curious",
  }
  

  type LearningTopic = {
    name: string;
    category?: string; 
    status: LearningStatus;
    notes?: string;
  };
  
  const myTopics: LearningTopic[] = [];
  

  function addTopic(name: string, status: LearningStatus, notes?: string, category?: string) {
    const topic: LearningTopic = {
      name,
      status,
      notes,
      category,
    };
  
    myTopics.push(topic);
  }
  

  addTopic("Photography basics", LearningStatus.Curious, "Want to explore composition", "Art");
  addTopic("TypeScript fundamentals", LearningStatus.Practicing, "Building small projects", "Tech");
  addTopic("Healthy cooking", LearningStatus.Mastered, "Meal prepping consistently", "Health");
  

  console.log("My learning topics:", myTopics);
  