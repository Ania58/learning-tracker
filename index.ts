
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

    printTopics() {
      this.myTopics.forEach((topic) => {
        console.log(`Topic: #${topic.id} - ${topic.name} [${topic.status}] (${topic.category ?? "No category"})`);
        console.log(`Notes: ${topic.notes ?? "No notes"}`);
        console.log('');
      });
    }

    updateTopic(id: number, updates: Partial<LearningTopic>): boolean {
      const topicIndex = this.myTopics.findIndex(topic => topic.id === id);
      if (topicIndex === -1) {
        console.error(`Topic with ID ${id} not found.`)
        return false;
      } 
        const topic = this.myTopics[topicIndex];
        this.myTopics[topicIndex] = {...topic,...updates};
        return true;
    }

  }

  const tracker = new LearningTracker();
  

  tracker.addTopic("Photography basics", LearningStatus.Curious, "Want to explore composition", "Art");
  tracker.addTopic("TypeScript fundamentals", LearningStatus.Practicing, "Building small projects", "Tech");
  tracker.addTopic("Healthy cooking", LearningStatus.Mastered, "Meal prepping consistently", "Health");
  

  console.log("My learning topics:", tracker.topics);
  
  tracker.updateTopic(2, { notes: "Switched to a different framework", category: "Frontend" });
  tracker.printTopics();