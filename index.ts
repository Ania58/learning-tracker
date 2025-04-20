
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

    removeTopic(id:number) :boolean {
      const topicIndex = this.myTopics.findIndex(topic => topic.id === id);
      if (topicIndex === -1) {
        console.error(`Topic with the ID ${id} not found.`);
        return false;
      }
      this.myTopics.splice(topicIndex, 1);
      console.log(`Topic with ID ${id} removed.`);
      return true;
    };

    filterTopicsByStatus(status: LearningStatus): LearningTopic[] {
      console.log(`Filtering topics by status: ${status}`)
      return this.myTopics.filter(topic => topic.status === status);
    }

    groupTopicsByStatus(): Record<LearningStatus, LearningTopic[]> {
      const groupedTopics: Record<LearningStatus, LearningTopic[]> = {
        [LearningStatus.Curious]: [],
        [LearningStatus.Mastered]: [],
        [LearningStatus.Practicing]: [],
      }
      this.myTopics.forEach((topic) => {
        groupedTopics[topic.status].push(topic)
      })
      console.log("Grouped topics by status:", groupedTopics);
      return groupedTopics;
    }
  }

  const tracker = new LearningTracker();
  

  tracker.addTopic("Photography basics", LearningStatus.Curious, "Want to explore composition", "Art");
  tracker.addTopic("TypeScript fundamentals", LearningStatus.Practicing, "Building small projects", "Tech");
  tracker.addTopic("Healthy cooking", LearningStatus.Mastered, "Meal prepping consistently", "Health");
  

  console.log("My learning topics:", tracker.topics);
  
  tracker.updateTopic(2, { notes: "Switched to a different framework", category: "Frontend" });
  tracker.filterTopicsByStatus(LearningStatus.Curious);
  tracker.groupTopicsByStatus();
  tracker.printTopics();


  abstract class LearningEntry {
    static nextId = 1;
    readonly id: number;
    readonly date: Date;
    notes?: string;

    constructor (
    id: number,
    date: Date,
    notes?: string,
    ) {
      this.id = id;
      this.date = date;
      this.notes = notes;
    }
    abstract print(): void;
  };

  class LearningTopicEntry extends LearningEntry implements Printable {
    constructor (public name:string, public status: LearningStatus, public category?: string, notes?: string) {
      super(LearningEntry.nextId++, new Date(), notes);
    }
    print() : void {
      console.log(`#${this.id} - ${this.name} [${this.status}]`);
      console.log(`Category: ${this.category ?? "None"}`);
      console.log(`Notes: ${this.notes ?? "None"}`);
    }
  };

  class LearningSession extends LearningEntry implements Printable{
    constructor (
      public duration: number,
      public method: string,
      notes?: string,
    ) {
      super(LearningEntry.nextId++, new Date(), notes)
    }
    print(): void {
      console.log(`#${this.id} - Learning Session (${this.method}, ${this.duration} min)`);
      console.log(`Notes: ${this.notes ?? "None"}`);
    }
  };

  interface Printable {
    print(): void;
  };

const topic = new LearningTopicEntry("TypeScript", LearningStatus.Practicing, "Tech", "Reviewing advanced types");
const session = new LearningSession(60, "reading", "Studied TypeScript docs");

//topic.print();
//session.print();

class Tracker<T extends LearningEntry> {
private entries: T[] = [];

  add(entry: T): void {
    this.entries.push(entry);
  }
  printAll(): void {
    this.entries.forEach((entry) => entry.print());
  }
  remove(id: number): boolean {
    const index = this.entries.findIndex(entry => entry.id === id);
    if (index === -1) return false;
    this.entries.splice(index, 1);
    console.log(`Removing entry with ID ${id}`);
    return true;
  }
  filterByNoteIncludes(text: string) : T[] {
    const lowerText = text.toLowerCase();
    return this.entries.filter(entry => entry.notes?.toLowerCase().includes(lowerText));
  }

  sortByDate(order: "asc" | "desc" = "asc") : T[] {
    return [...this.entries].sort((a,b) => {
      return order === "asc"
      ? a.date.getTime() - b.date.getTime()
      : b.date.getTime() - a.date.getTime();
    })
  }
};

const topicTracker = new Tracker<LearningTopicEntry>();
const sessionTracker = new Tracker<LearningSession>();

topicTracker.add(new LearningTopicEntry("React", LearningStatus.Practicing, "Web Dev", "Hooks and stuff"));
sessionTracker.add(new LearningSession(45, "video", "Watched a YouTube tutorial"));

topicTracker.add(topic); 
sessionTracker.add(session);

console.log("Filtered entries:");
const filtered = topicTracker.filterByNoteIncludes("TypeScript");
filtered.forEach(entry => entry.print());

console.log("Sorted by date (desc):");
topicTracker.sortByDate("desc").forEach(entry => entry.print());



topicTracker.printAll();
sessionTracker.printAll();
