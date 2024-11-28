// import data from '/rec/quotes.json' assert { type: 'json' };

var quotes = [
    "Rarely is the question asked: Is our children learning? - George W. Bush",
    "You teach a child to read, and he or her will be able to pass a literacy test. - George W. Bush",
    "The decision of one man, to launch a wholly unjustified and brutal invasion of Iraq. I mean, of the Ukraine. Iraq too. Anyway — I'm 75. - George W. Bush",
    "(On a golf course) We must stop the terror. I call upon all nations, to do everything they can, to stop these terrorist killers. Thank you...now watch this drive. - George W. Bush",
    "Well, I mean that a defeat in Iraq will embolden the enemy and will provide the enemy—more opportunity to train, plan, to attack us. That's what I mean. There— it's— you know, one of the hardest parts of my job is to connect Iraq to the war on terror. - George W. Bush",
    "Our enemies are innovative and resourceful, and so are we. They never stop thinking about new ways to harm our country and our people, and neither do we. - George W. Bush",
    "Song of Songs 7:4 NIV: Your nose is like the tower of Lebanon looking toward Damascus.",
    "Galatians 5:12 HCSB: I wish those who are disturbing you might also get themselves castrated!",
    "Matthew 21:18 NIV: Early in the morning, as Jesus was on his way back to the city, he was hungry. Seeing a fig tree by the road, he went up to it but found nothing on it except leaves. Then he said to it, “May you never bear fruit again!” Immediately the tree withered.",
    "Yesterday, you made note of my—the lack of my talent when it came to dancing. But nevertheless, I want you to know I danced with joy. And no question Liberia has gone through very difficult times. - George W. Bush",
    "I'll be long gone before some smart person ever figures out what happened inside this Oval Office. - George W. Bush",
    "I know that human beings and fish can coexist peacefully. - George W. Bush",
    "There's an old saying in Tennessee—I know it's in Texas, probably in Tennessee—that says, 'Fool me once, shame on...shame on you. Fool me—you can't get fooled again. - George W. Bush",
    "Children are our greatest natural resource. - Herbert Hoover",
    "They misunderestimated me. - George W. Bush",
    "I know how hard it is for you to put food on your family. - George W. Bush",
    "I couldn't imagine somebody like Osama bin Laden understanding the joy of Hanukkah. - George W. Bush",
    "For every fatal shooting, there were roughly three nonfatal shootings. And, folks, this is unacceptable in America. It's just unacceptable. And we're going to do something about it. - George W. Bush",
    "I don't know where bin Laden is. I have no idea and really don't care. It's not that important. It's not our priority. - George W. Bush",
    "The most important thing is for us to find Osama bin Laden. It is our No. 1 priority, and we will not rest until we find him. - George W. Bush",
    "Do you have Blacks, too? - George W. Bush",
    "You work three jobs?… Uniquely American, isn't it? I mean, that is fantastic that you're doing that. - George W. Bush",
    "Goodbye from the world's biggest polluter. - George W. Bush",
    "My fear is that the whole island will become so overly populated that it will tip over and capsize. - Hank Johnson",
    "For seven and a half years I've worked alongside President Reagan. We've had triumphs. Made some mistakes. We've had some sex...uh...setbacks. - George H. W. Bush",
    "We had no domestic attacks under Bush; we've had one under Obama. - Rudy Giuliani",
    "They don't call me Tyrannosaurus Sex for nothing. - Ted Kennedy",
    "You cannot go to a 7-11 or a Dunkin' Donuts unless you have a slight Indian accent... I'm not joking. - Joe Biden",
    "I love California, I practically grew up in Phoenix. - Dan Quayle",
    "Things are more like they are now than they have ever been. - Gerald Ford",
    "I think that gay marriage should be between a man and a woman. - Arnold Scharzengger",
    "Death has a tendency to encourage a depressing view of war. - Donald Rumsfeld",
    "I was recently on a tour of Latin America, and the only regret I have was that I didn't study Latin harder in school so I could converse with those people. - Dan Quayle",
    "Blessed are the young, for they shall inherit the national debt. - Herbert Hoover",
    "I've looked on many women with lust. I've committed adultery in my heart many times. God knows I will do this and forgives me. - Jimmy Carter",
    "Maybe we need a very small nuke thrown off on Foggy Bottom to shake things up - Pat Robertson",
    "I AM the federal government. - Tom DeLay",
    "Outside of the killings, Washington has one of the lowest crime rates in the country. - Marion Barry",
    "There is no Soviet domination of Eastern Europe. - Gerald Ford",
    "If I were a single man, I might ask that mummy out. That's a good-looking mummy. - Bill Clinton",
    "You know, education — if you make the most of it — you study hard, you do your homework and you make an effort to be smart, you can do well. If you don't, you get stuck in Iraq. - John Kerry",
    "I am a man of limited talents from a small town. I don't seem to grasp that I am the President. - Warren G. Harding",
    "I would have made a good Pope. - Richard Nixon",
    "As you well know, Mr. President, railroad carriages are pulled at the enormous speed of 15 miles per hour. The Almighty certainly never intended that people should travel at such breakneck speed. - Martin Van Buren",
    "Reader, suppose you were an idiot. And suppose you were a member of Congress. But I repeat myself. - Mark Twain",
    "If ignorance goes to forty dollars a barrel, I want drilling rights to George Bush's head. - Jim Hightower",
    "Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly, and applying the wrong remedies. - Groucho Marx",
    "I've noticed that everyone who is for abortion has already been born. - Ronald Reagan",
    "The ice is melting at the poles. - Villy Søvndal"
]

// get today
var today = new Date();

var epoch = Math.floor(today / 8.64e7)

var current = epoch % quotes.length 

document.getElementById("quote").innerHTML = quotes[current]
