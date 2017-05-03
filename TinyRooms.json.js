[{
    "id": "1",
    "name": "Bed",
    "description": "Moonlight plays through the window, softly illuminating the bedroom, full of comfortable memories. To the west is the cupboard where you usually live, and the doorway to the northwest leads to the rest of the house. David, your owner, lies next to you on the bed, in a deep sleep. Say 'talk to David' to interact with him. ",
    "motions": [{
      "dir": "WEST",
      "dest": "2"
    }, {
      "dir": "GET",
      "dest": "2"
    }],
    "info": "bed"
  },

  {
    "id": "2",
    "name": "Bedroom",
    "description": "You tumble down, but being a soft bear, that's ok. To the west is the cupboard where you usually live, and the doorway to the northwest leads to the rest of the house. A big bed fills up most of the room. Say 'cupboard' to go to the cupboard. Say 'hallway' to go to the hallway.",
    "motions": [{
      "dir": "WEST",
      "dest": "3"
    }, {
      "dir": "CUPBOARD",
      "dest": "3"
    }, {
      "dir": "BED",
      "dest": "1"
    }, {
      "dir": "HALLWAY",
      "dest": "4"
    }],
    "info": "in-the-bedroom"
  }, {
    "id": "3",
    "name": "Cupboard",
    "description": "When you aren't lying on the bed, you usually stay in here, snug and safe with your friends atop the warm pile of clothes. The cupboard opens eastward to the bedroom. On the pile of clothes you can see your good friends Matthew. If you want to go back to the bedroom, just say 'bedroom'.",
    "motions": [{
      "dir": "EAST",
      "dest": "2"
    }, {
      "dir": "BEDROOM",
      "dest": "2"
    }],
    "info": "on-the-cupboard"
  }, {
    "id": "4",
    "name": "Hallway",
    "description": "A yellow plastic ball, known as a favourite toy of the family cat, has been left here. The doorway leads to the study room. Say 'take the ball' to take it. Say 'study' to go there. ",
    "motions": [{
      "dir": "BEDROOM",
      "dest": "2"
    }, {
      "dir": "STUDY",
      "dest": "5"
    }],
    "info": "hallway"
  }, {
    "id": "5",
    "name": "Study",
    "description": "You ran to the study. Chester, the cat, is right here, sleeping sound and quiet. You need to find a way to wake her up.",
    "motions": [{
      "dir": "BEDROOM",
      "dest": "2"
    }, {
      "dir": "LAPTOP",
      "dest": "6"
    }],
    "info": "doorway"
  }, {
    "id": "6",
    "name": "Laptop",
    "description": "You see David's laptop on the couch. You open it and set a reminder. Now, you don't need to worry David will forget about your party. Say 'bed' to let Chester take you back to the bed.",
    "motions": [{
      "dir": "BED",
      "dest": "7"
    }],
    "info": "laptop"
  }, {
    "id": "7",
    "name": "Bed",
    "description": "You return to bed safe and sound. Thank you Chester. You go back to sleep and wish for a great party tomorrow. This is the end of you adventure as a teddy bear.",
    "motions": [{
      "dir": "BED",
      "dest": "7"
    }],
    "info": "bed"
  }
]
