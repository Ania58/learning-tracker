# 📚 Learning Tracker

A TypeScript project to organize and track your learning topics and sessions. This app was designed to practice advanced TypeScript concepts in a real-world Object-Oriented Programming (OOP) structure.

---

## 🧠 Features

- Add and manage learning topics with categories, statuses, and notes
- Update, remove, and group topics by status
- Track learning sessions with duration and method
- Use generic `Tracker<T>` to manage different types of entries
- Filter entries by keyword in notes
- Sort entries by date (ascending or descending)
- Export entries to JSON

---

## 🛠 Built With

- **TypeScript**
- Core principles of **OOP**
- Advanced TypeScript concepts:
  - `enums`, `type aliases`, `interfaces`
  - `classes`, `inheritance`, `abstract classes`
  - `generics`, `type guards`, `utility types`
  - `getters`, `setters`, `static properties`
  - and more...

---

## 📂 Project Structure

```bash
learning-tracker/
├── index.ts        # Main TypeScript logic
├── index.js        # Compiled JavaScript output (ignored by Git)
├── README.md       # This file
├── tsconfig.json   # TypeScript config file
```
## 🚀 How to Run

1. **Compile the code:**
```bash
npx tsc
```
2. **Run the app:**
```bash
node index.js
```

You’ll see all topic/session info printed in the console, including filtering and sorting.

## 📦 Example Output
```bash
My learning topics: [ { name: 'TypeScript', status: 'practicing', ... } ]
Filtered entries:
#1 - TypeScript [practicing]
Category: Tech
Notes: Reviewing advanced types
Sorted by date (desc):
#2 - React [practicing]
...
Exported JSON:
[
  {
    "id": 1,
    "date": "2024-04-20T14:00:00.000Z",
    "name": "TypeScript",
    ...
  }
]
```
