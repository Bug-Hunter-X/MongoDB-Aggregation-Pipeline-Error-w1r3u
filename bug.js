```javascript
//Incorrect Aggregation Pipeline
db.collection.aggregate([
  {
    $match: { /* filter criteria */ }
  },
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10
  }
])
```