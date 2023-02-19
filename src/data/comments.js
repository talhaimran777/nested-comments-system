const comments = [
  {
    id: 1,
    commentBy: "r/hamza",
    body: `Pretty print actually works with multiple arguments too, where as
      the above expects the second argument to be options to inspect which is
      probably not intentional.`,
    createdAt: "13.hours.ago",
    replies: [
      {
        id: 3,
        commentBy: "r/talha",
        body: `I'm really satisfied with new neovim version.`,
        createdAt: "10.hours.ago",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    commentBy: "r/talha",
    body: `Testing out new neovim version.`,
    createdAt: "12.hours.ago",
    replies: [],
  },
];

export default comments;
