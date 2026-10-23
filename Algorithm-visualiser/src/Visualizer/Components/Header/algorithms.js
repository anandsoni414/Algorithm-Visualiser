export const algorithmInfo = [
  {
    id: 'dijkstra',
    name: 'Dijkstra',
    header: 'Weighted',
    content:
      'Running Time:\nO( | E | log | V | )\nAlways finds the shortest path.',
    footer: 'Uses distance of nodes to choose the direction to travel.',
  },
  {
    id: 'dfs',
    name: 'Depth First Search',
    header: 'Not Weighted',
    content:
      'Running Time:\nO( | V | + | E | )\nWill not find the shortest path',
    footer: 'Searches every branch of a graph',
  },
  {
    id: 'bfs',
    name: 'Breadth First Search',
    header: 'Not Weighted',
    content: 'Running Time:\nO( | V | + | E | )\nWill find the shortest path',
    footer:
      'Will search paths only after its current path has been fully explored.',
  },
];

export default algorithmInfo;
