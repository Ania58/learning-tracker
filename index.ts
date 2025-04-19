
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
    id: number;
  };

  class LearningTracker {
    private myTopics: LearningTopic[] = [];

    static nextId = 1;
    
    addTopic(name: string, status: LearningStatus, notes?: string, category?: string) {
      const topic: LearningTopic = {
        name,
        status,
        notes,
        category,
        id: LearningTracker.nextId++
      };
      this.myTopics.push(topic)
    };
    
    get topics() {
      return this.myTopics
    } 

    get count () {
      return this.myTopics.length;
    }
  }

  const tracker = new LearningTracker();
  

  tracker.addTopic("Photography basics", LearningStatus.Curious, "Want to explore composition", "Art");
  tracker.addTopic("TypeScript fundamentals", LearningStatus.Practicing, "Building small projects", "Tech");
  tracker.addTopic("Healthy cooking", LearningStatus.Mastered, "Meal prepping consistently", "Health");
  

  console.log("My learning topics:", tracker.topics);
  