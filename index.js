"use strict";
var LearningStatus;
(function (LearningStatus) {
    LearningStatus["Mastered"] = "mastered";
    LearningStatus["Practicing"] = "practicing";
    LearningStatus["Curious"] = "curious";
})(LearningStatus || (LearningStatus = {}));
const myTopics = [];
function addTopic(name, status, notes, category) {
    const topic = {
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
