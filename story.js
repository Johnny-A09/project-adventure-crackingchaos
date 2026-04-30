export let playerName = "";
export const story = {
   
    jessieStart: {
       text: `Your name is ${playerName}. You grew up scrappy, always the one who figured things out when no one else would. You've been crashing on a park bench in Koreatown for three nights now, living off vending machine chips and sheer stubbornness. You pull out a crumpled twenty, your last one, and stare at it. The candy game was the only thing keeping you going. Your old supplier ghosted you after the raid, and the people who knew your product are now whispering that "Purpleman's operation is dead."\n\nYou overhear two street vendors arguing nearby. One of them drops a bag of contraband gummy bears and walks off furious. You eye the bag.`,
       choice: ['Pick up the bag and sell it yourself to get seed money', 'Ignore it and look for a legit part-time job to fund a fresh start', 'Follow the angry vendor -- maybe he knows the underground candy market'],
       idsForChoices: ['jessieHustle', 'jessieLegit', 'jessieFollow'],
       pictureForScene: "/images/korea-scene.png"
    },


    jessieHustle: {
        text: `You scoop the bag and spend the afternoon working the park near the Staples Center. You've got the pitch down, you always did. By sundown you've tripled your twenty. It's not enough to restart a real operation, but it's proof you still have the gift. You're heading back to your bench when you pass an alley and smell something familiar, sugar, citric acid, the sharp pop of carbon dioxide candy. Someone nearby is still cooking.\n\nYou slow your steps. This could be a connect, or a competitor.`,
        choice: ['Invesitgate the smell', 'Keep walking -- stay off the radar for now'],
        idsForChoices: ['jessieAlley', 'jessieLayLow'],
        pictureForScene: ""
    },


    jessieLegit: {
        text: `You land a two-day shift washing dishes at a taco spot on Vermont Ave. It's humbling, but you keep your head down and pocket $180. On your second night, the owner's kid, maybe 16, slides up to you and whispers that he's heard of Purpleman's pop rocks. Says the kids at his school are obsessed and want to know if production is ever coming back. Word travels fast in this city.\n\nYour cover is already blown, even when you're trying to lay low.`,
        choice: ['Tell the kid you\'re done with life', 'Tell the kid to spread the word Purpleman is back soon'],
        idsForChoices: ['jessieLayLow', 'jessieAlley'],
        pictureForScene: ""

    },


    jessieFollow: {
        text: `You tail the vendor six blocks into a strip mall parking lot. He meets with two others and they exchange cash for a duffel bag. You watch long enough to realize this isn't your league, not yet. But as you turn to leave, a woman locks eyes with you. She's mid-40s, sharp, with the kind of stillness that comes from years of knowing when to move and when not to. She says one thing: "You're Purpleman's, aren't you. The one that got away."\n\nShe walks off before you can respond. But she drops a napkin with an address.`,
        choice: ['Go to the address', 'Throw it away -- strangers with information are dangerous'],
        idsForChoices: ['jessieAlley', 'jessieLayLow'],
        pictureForScene: ""
    },


    jessieLayLow: {
        text: `You spend a week keeping your head down. You eat cheap, sleep wherever you can, and watch the neighborhood. The heat from the raid begins to cool. The SGA's surveillance vans stop circling your old block. You feel the familiar itch, the city is still hungry for your product. And you've learned enough about laying low to know when to move again.\n\nYou're ready to start cooking on your own.`,
        choice: ['Start a small solo operation'],
        idsForChoices: ['soloGrind'],
        pictureForScene: ""
    },


    jessieAlley: {
        text: `You follow your nose into the alley. Behind a dumpster, an old fold-up table holds a single hot plate, a candy thermometer, and bags of sugar and citric acid. Nobody's here, whoever was cooking left in a hurry. Or is watching you right now.\n\nYou sit down, use what's left on the table, and produce a small batch of pop rocks just to prove you still can. They're good. Really good. But you're alone, underfunded, and exposed.\n\nYou need to restart properly.`,
        choice: ['Start a small solo operation'],
        idsForChoices: ['soloGrind'],
        pictureForScene: ""
    },

    //This is where Jesus / Juanitia story starts

    jesusjuanitaStart: {
        text: `Your name is ${playerName}. You've always moved between worlds without belonging to any of them, which made you the crew's best front person. Charm, fluency in three languages, and a face nobody forgets. When the SGA hit the house, you were the last one out the back window. You landed on your feet. You always do.\n\nNow you're in Boyle Heights, sleeping on a cousin's couch, too proud to explain why you showed up with nothing. Your cousin asks no questions. The neighborhood, though, it knows things. The corner store owner keeps giving you looks. The kids on the block stop talking when you pass.`,
        choice: ['Ask the corner store owner what he knows', 'Keep your head down at your cousin\'s and plan your next move', 'Work the neighborhood -- introduce yourself, make connections'],
        idsForChoices: ['jesusjuanitaStoreOwner', 'jesusjuanitaCousin', 'jesusjuanitaNetwork'],
        pictureForScene: ""
    },


    jesusjuanitaStoreOwner: {
        text: `he store owner, Mr. Castillo, is 60-something and has seen everything. Over a Jarritos he tells you the SGA has been expanding, more raids, more plainclothes agents in East LA. But he also says the demand for unlicensed candy has never been higher. "The kids," he says, shaking his head. "They want what they can't have."\n\nHe slides you a name on a receipt: someone who might need a new supplier contact. It's a long shot, but it's a thread.`,
        choice: ['Folllow up on the name', 'Thank him and plan your next move independently'],
        idsForChoices: ['jesusjuanitaNetwork', 'jesusjunaitaCousin'],
        pictureForScene: ""
    },


    jesusjuanitaCousin: {
        text: `You spend three days on your cousin's couch, filling notebooks with plans. Supply chain. Distribution routes. Safe house requirements. You've done this before, but smarter this time. By day four you have a blueprint for a lean operation. Small, quiet, profitable.\n\nThe only thing missing is a production partner. You can source and sell, you always could. But the cooking? That was always someone else's lane.`,
        choice: ['Try to cook solo anyway', 'Reach out through the neighborhood for a connect'],
        idsForChoices: ['jesusjuanitaNetwork', 'soloGrind'],
        pictureForScene: ""
    },


    jesusjuanitaNetwork: {
        text: `You spend a week reintroducing yourself to the neighborhood ecosystem. Not as a candy vendor, just as someone who's around, who listens, who helps where they can. You fix a lady's phone. You translate at a lease signing. You play dominoes with the old men at the park.\n\nBy the end of the week, three different people have quietly asked if Purpleman's product is coming back. The market is waiting. You just need to supply it.\n\nTime to cook, or find someone who can.`,
        choice: ['Start a small solo operation'],
        idsForChoices: ['soloGrind'],
        pictureForScene: ""
    },

    //Rei story pathway
    reiStart: {
        text: `Your name is ${playerName}. You were always the technical one, the one who perfected the recipes, calibrated the temperatures, tracked the batch quality. When the SGA hit, you were in the middle of a cook. You barely grabbed your notebook before running. That notebook, filled with formulas, ratios, and notes in the margins, is the only thing you have left.\n\nYou've found a temporary room in a hostel in Silver Lake. It's clean and anonymous. You sit on the bed and open the notebook. You could recreate everything. Better, even. But without the crew, without the resources, you're a brain with no body.`,
        choice: ['Post on underground forums for collaborators', 'Try to source ingredients and cook a small test batch alone', 'Reach out to your old ingredient supplier'],
        idsForChoices: ['reiForum', 'reiCook', 'reiSupplier'],
        pictureForScene: ""
    },


    reiForum: {
       text: `You find a niche forum on the dark corners of the web where unlicensed food producers share knowledge. You post carefully, vague enough to not expose yourself, specific enough to attract real talent. Within 48 hours you get three responses. Two are junk. One is from someone who calls themselves "W.B.B." who says they have culinary training and are looking for a technical partner.\n\nYou file it away for now. Something about the tone feels serious.`,
         choice: ['Reply to W.B.B.', 'Try producing a test batch on your own first'],
        idsForChoices: ['reiCook', 'soloGrind'],
        pictureForScene: ""
    },


    reiSupplier: {
        text: `You contact your old ingredient supplier through an encrypted message. He's nervous, the SGA crackdown spooked a lot of people. But he confirms he can still source what you need, at a premium. He also mentions that someone else has been asking about high-grade candy ingredients in the area. A teacher, apparently. Culinary background.\n\nA teacher. That's an odd detail that sticks with you.`,
        choice: ['Ask more about the teacher', 'Order supplies and start a solo test batch'],
        idsForChoices: ['reiCook', 'soloGrind'],
        pictureForScene: ""
    },


    reiCook: {
        text: `You source a small amount of ingredients and convert the hostel bathroom into a micro-lab for one night. Using your notebook, you produce a flawless small batch. The crystals form perfectly. The pop is clean and sharp. The flavor is better than anything the crew ever made.\n\nBut you're producing maybe 40 units a night by yourself. That's not a business, that's a hobby. You need scale. You need a partner. And one night, while you're packaging your batch in the hostel parking lot, someone walks up out of the dark and says your name.`,
        choice: ['Turn around'],
        idsForChoices: ['soloGrind'],
        pictureForScene: ""
    },

    //Where the different starts merge
    soloGrind: {
        text: `Alone and under-resourced, you start producing, small batches, late nights, moving locations every few days to stay off the SGA's radar. The product is decent but inconsistent without the full crew. Sales trickle. It's enough to eat, barely enough to keep going. You're a one-person operation in a city that rewards scale.\n\nWeeks pass. Then one night, after finishing a batch of pop rocks in the back of a rented storage unit, you hear footsteps outside. You freeze. The footsteps slow. A knock on the door, three taps, measured and deliberate. Not SGA. They don't knock.`,
        choice: ['Open the door', 'Slip out the back'],
        idsForChoices: ['williamReveal', 'williamReveal'],
        pictureForScene: ""
    },


    williamReveal: {
        text: `Standing in the doorway, or catching up to you in the alley if you tried to run, is a man you haven't thought about in years. William "Bob" Black. Your old culinary teacher. He's older, a little worn, but his eyes are the same: sharp, warm, always calculating the best way to explain something.\n\nHe holds up both hands. "I'm not SGA. I'm not anyone's informant. I teach 9th and 10th graders at Wadiya High now." He pauses. "And I'm broke, I'm sick, and I need money for treatment for a chronic cortisol condition that's eating me alive."\n\nHe steps forward. "I heard you were still out here. I know candy production. Real culinary-grade formulation. You know the market. I think you know what I'm about to propose."`,
        choice: ['Accept William\'s offer', 'Reject William\'s offer', 'Work at Sooubway instead'],
        idsForChoices: ['williamAccept', 'williamReject', 'sooubwayEnd'],
        pictureForScene: ""
    },


    williamReject: {
        text: `You tell William no. You appreciate the honesty, but bringing in a partner, especially one with no street experience, feels like a liability. You wish him well and send him off. He nods slowly, like he expected it.\n\nYou go back to the grind alone. The product stays inconsistent. The money stays thin. Three weeks later, you cross paths with William at a gas station. He looks worse. You look tired. Neither of you says anything for a long moment.\n\nFinally, he says: "The offer still stands. But it won't for much longer."`,
        choice: ['Accept William\'s offer this time', 'Keep refusing and continue solo'],
        idsForChoices: ['williamAccept', 'grindFail'],
        pictureForScene: ""
    },


    grindFail: {
        text: `You push on alone. The inconsistency in your batches starts costing you customers. A rival operation moves into your distribution spots. You're running out of money faster than you're making it, and the isolation is wearing you down.\n\nYou get a call from an unknown number. It's one of your old crew members, calling from inside. "Get help," they say. "You can't do this alone. You never could." The line goes dead.\n\nYou sit in the dark for a long time. Then you pull out William Black's number.`,
        choice: ['Call William'],
        idsForChoices: ['williamAccept'],
        pictureForScene: ""
    },

    //william comes into play
    williamAccept: {
        text: `You shake on it. William moves his sparse belongings into a corner of whatever space you're using and gets to work immediately. Within 48 hours you understand what you've been missing. He doesn't just cook, he engineers. He adjusts pH levels, controls crystallization rates, layers flavor compounds in ways that make your best previous batches taste like prototypes.\n\nThe product becomes something else entirely. People start talking. Your regulars are telling other people. Demand is building quietly, steadily. For the first time since the raid, it feels like something real is happening.\n\nThen comes the cooking session that changes everything.`,
        choice: ['Begin the cooking session'],
        idsForChoices: ['minigameCooking'],
        pictureForScene: ""
    },

    minigameCooking: {
        text: `[MINIGAME: CANDY COOK] William walks you through the process, temperature windows, timing, the exact moment to pull from heat. Your decisions here affect the batch quality and your reputation score. Produce a perfect batch and the next chapter opens with high credibility. Rush it or misjudge, and you'll have to rebuild trust.\n\nAfter the session, you box up your best batch yet and put it out into the market.`,
        choice: ['Ship the batch and wait for results'],
        idsForChoices: ['dealerApproach'],
        pictureForScene: "",
        minigame: 'cooking'
    },


    dealerApproach: {
        text: `Word spreads fast. Three days after your best batch hits the streets, a man shows up at your location. He didn't knock, he was just suddenly inside, sitting in a chair, eating one of your pop rocks with the practiced calm of someone used to being the most dangerous person in any room.\n\nHis name is Cord. He's a distributor with reach you can't imagine, he mentions Agartha, an underground mass production facility outside the city. He wants you and William. He wants your product at industrial scale. He slides a paper across the table with a number on it.\n\nThe number is enormous.`,
        choice: ['Reject Cord\'s offer', 'Accept Cord\'s offer', 'Try to negotiate terms'],
        idsForChoices: ['dealerReject', 'dealerAccept', 'dealerNegotiate'],
        pictureForScene: ""
    },


    dealerNegotiate: {
        text: `You try to negotiate. You lay out your terms, you keep the recipe proprietary, you maintain creative control over quality, you want a percentage rather than a flat wage. Cord listens. He's almost amused.\n\nThen he leans forward. "This isn't a negotiation. I'm here out of courtesy. I could take what I need from you without this conversation." He lets that sit in the air for exactly three seconds. "My offer stands. Take it or don't. But understand that 'don't' has consequences."`,
        choice: ['Persist with your terms', 'Back down anf accept his offer', 'Reject outright'],
        idsForChoices: ['dealerPersist', 'dealerAccept', 'dealerReject'],
        pictureForScene: ""
    },


    dealerPersist: {
        text: `You hold your ground. Cord's expression doesn't change — which is somehow worse than if it had. He stands, straightens his jacket, and says quietly: "I'll give you 24 hours to reconsider. If I don't hear from you, we'll have a different conversation. One you won't enjoy."\n\nHe leaves. The room feels smaller after he's gone. William is staring at the table.`,
        choice: ['Keep refusing, call his bluff', 'Cave and accept his offer'],
        idsForChoices: ['dealerDeathWarning', 'dealerAccept'],
        pictureForScene: ""
    },


    dealerDeathWarning: {
        text: `24 hours pass. Then 48. Cord doesn't come back — but someone else does. Two men who don't introduce themselves sit outside your location in a car all night. In the morning, you find one of your supply bags slashed open on the doorstep. It's not subtle. It's a message.\n\nWilliam grabs your arm. "This isn't worth dying over. Either we work with this man, or we disappear. There is no third option from him."`,
        choice: ['Accept Cord\'s offer under duress', 'Disappear, cut and run'],
        idsForChoices: ['dealerAccept', 'escapeEarly'],
        pictureForScene: ""
    },


    escapeEarly: {
        text: `You and William pack everything that night. New phones, new location, a town two hours north. You've made enough to survive for a few months if you're careful. Cord will eventually stop looking — or he won't, but at least you'll be harder to find.\n\nYou've escaped the dealer. But the SGA is still out there, and you've left the Los Angeles market entirely. Starting over from scratch — again.`,
        choice: ['Rebuild from the new location'],
        idsForChoices: ['escapeEnding'],
        pictureForScene: ""
    },


    dealerReject: {
        text: `You tell Cord no. He doesn't argue. He just stands, straightens his jacket, and walks out. The silence after the door closes is suffocating.\n\nThree days later, things start going wrong. Your distribution spots get hit by unknown competitors. An ingredient supplier cuts you off without explanation. Someone has been talking about your location online. Cord is applying pressure without showing his face.\n\nWilliam sits across from you with tired eyes. "We can't sustain this indefinitely. We either find a way forward or we get buried."`,
        choice: ['Reach out to Cord and accept his terms after all', 'Find a different backer', 'Go it alone and fight the pressure'],
        idsForChoices: ['dealerAccept', 'altBacker', 'soloResistance'],
        pictureForScene: ""
    },


    altBacker: {
        text: `Through William's old culinary contacts, you find a smaller backer — a woman named Eloise who runs a legitimate catering supply company as a front. She can't offer Cord-level scale, but she offers something better: stability, discretion, and a clean cut of profits. No threats. No Agartha.\n\nThe operation grows slowly. But it grows clean.`,
        choice: ['Accept Eloise\'s backing and scale up carefully'],
        idsForChoices: ['productionChoice'],
        pictureForScene: ""
    },


    soloResistance: {
        text: `You dig in. You move locations again, tighten your circle to just you and William, and rebuild your distribution through word of mouth only. It's slower. Harder. But you're not owned by anyone.\n\nCord eventually moves on to easier targets. The pressure lifts after three brutal weeks. You've survived — and you've proven something to yourself. But the experience has cost you time, money, and nerves.`,
        choice: ['Continue building the operation your way'],
        idsForChoices: ['productionChoice'],
        pictureForScene: ""
    },


    dealerAccept: {
        text: `You agree to Cord's terms. He doesn't celebrate — he just nods and pulls out a phone to make a call. Within a week, your operation has been relocated. You and William are producing at a scale you've never seen. The money is real. The risk is also very real.\n\nCord runs a tight ship. He sets production targets. He controls distribution. You and William are the engine — skilled, essential, and not entirely free.\n\nThe question now is how you run this engine.`,
        choice: ['Begin the production phase'],
        idsForChoices: ['productionChoice'],
        pictureForScene: ""
    },


    productionChoice: {
        text: `The operation is running. You and William stand over the production setup every night, making decisions that affect everything downstream. Cord has given you latitude on one thing: pace. You can run this conservatively — smaller batches, lower profile, lower profits — or you can push hard, maximize output, and make serious money fast.\n\nWilliam looks at you. "How do you want to play this?"`,
        choice: ['Slow N Steady, low risk, lower income', 'Fast and Furious, high risk, high risk, high income'],
        idsForChoices: ['slowPath', 'fastPath'],
        pictureForScene: ""
    },


    slowPath: {
    text: `You choose patience. Small batches, careful movement, no flashiness. Cord is mildly annoyed but respects consistency. Over several months, the operation grows quietly. Your product's reputation continues to build — quality over quantity. William's health improves as your income stabilizes and he can afford his treatments.\n\nBut nothing stays quiet forever. A new SGA task force — Division 7 — has been assembled specifically to target unlicensed candy operations of your profile. They've been building a case for months.\n\nYou don't know it yet, but they know exactly where you are.`,
    choice: ['Continue the operation', 'Trust your instincts — something feels off'],
    idsForChoices: ['sgaClosing', 'slowParanoia'],
    pictureForScene: ""
     },



    slowParanoia: {
    text: `You voice your concern to William. He thinks you're being paranoid — things have been good. But you listen to your gut and do an audit: you check for surveillance, vary your routes, stop using the same ingredient supplier. It buys you time.\n\nThree weeks later, you see the van parked two blocks from your location. Same spot. Two days in a row. Your instinct was right.\n\nNow you have a head start — barely. You have to decide what to do with it.`,
    choice: ['Shut everything down and go dark', 'Run with what you have and flee', 'Tip off Cord and let him handle it'],
    idsForChoices: ['sgaShutdown', 'escapeEnding', 'cordBetrayal'],
    pictureForScene: ""
    },


    sgaClosing: {
    text: `Division 7 moves in on a Wednesday morning. They don't announce it. They just appear — vans from three directions, agents in plainclothes and uniform. You and William are mid-production when William sees them through a window and says, very quietly: "It's over."\n\nYou have maybe 90 seconds.`,
    choice: ['Grab the notebooks and run', 'Surrender — you\'re too tired to run', 'Try to destroy evidence and stall'],
    idsForChoices: ['escapeEnding', 'surrenderEnding', 'stallSga'],
    pictureForScene: ""
    },


    fastPath: {
    text: `[MINIGAME: PRODUCTION SPEED] You go all in. The operation runs at maximum capacity — longer hours, larger batches, more distribution routes. The money comes in fast. Cord is pleased. William is exhausted but driven by the medical bills piling up.\n\nYour product transcends the local market. It hits underground networks up and down the West Coast. Purleman's candy is a name people know without knowing who's behind it. You're generating more revenue in a week than you used to make in a month.\n\nBut Division 7 of the SGA has been watching your distribution trail for weeks.`,
    choice: ['Continue at full speed — the money is too good', 'Recognize the danger and dial back production'],
    idsForChoices: ['fastFullSpeed', 'fastDialBack'],
    minigame: 'production',
    pictureForScene: ""
    },


    fastFullSpeed: {
    text: `You push harder. Cord pushes you harder. The numbers are intoxicating. William stops sleeping. You stop sleeping. The operation feels invincible because it's never been bigger.\n\nThen a distribution runner gets picked up by Division 7. Under pressure, he gives up a location. SGA raids it within hours. They find evidence pointing directly to your main facility. You have less than 12 hours before they arrive.\n\nCord calls you before the agents do. "Clean it out or burn it down. I'm gone either way." Then nothing.`,
    choice: ['Try to evacuate and flee', 'Burn the evidence — high risk, last stand', 'Give yourself up before they come to you'],
    idsForChoices: ['escapeEnding', 'burnEnding', 'surrenderEnding'],
    pictureForScene: ""
    },


    fastDialBack: {
    text: `You tell Cord you're reducing pace. He's furious, but not dangerous-furious — he's invested in the operation and won't cut it off over a slowdown. You and William halve production for three weeks. Division 7 loses your distribution thread in the noise.\n\nYou've bought time. But the momentum you had is gone, and Cord is watching you more carefully now. The slow burn is back — but now you're doing it with someone who doesn't fully trust you.`,
    choice: ['Rebuild trust with Cord and continue', 'Use this lull to start planning your exit'],
    idsForChoices: ['sgaClosing', 'planEscape'],
    pictureForScene: ""
    },


    planEscape: {
    text: `You and William start quietly preparing to disappear. You've made enough money — not generational wealth, but enough. You route funds through untraceable channels. William secures his medical supply chain independently. You identify a city far enough away that Cord won't bother following.\n\nYou give yourself two weeks. Every day you pack a little more, sell off a little less, and pretend everything is normal.`,
    choice: ['Execute the escape plan', 'Get cold feet — delay the plan'],
    idsForChoices: ['escapeEnding', 'sgaClosing'],
    pictureForScene: ""
  },



  sgaShutdown: {
    text: `You initiate a controlled shutdown. You and William dismantle the operation piece by piece over 72 hours. Equipment is sold. Supplies are distributed. The location is cleaned. By the time Division 7 gets a warrant, there's nothing to find.\n\nYou've escaped — barely and quietly. William is safe. You're free. You've lost Cord's operation, but you've kept your lives and your freedom.\n\nLos Angeles is still out there. Smaller cities aren't. You make a choice about where to go next.`,
    choice: ['Disappear into a new life, take the escape ending', 'Go back to Los Angeles and rebuild from scratch'],
    idsForChoices: ['escapeEnding', 'fameRebuild'],
    pictureForScene: ""
    },



    cordBetrayal: {
    text: `You tip off Cord hoping he'll use his resources to deal with Division 7. He does — but not the way you expected. Cord feeds them a sacrificial operation in a different city, buys himself cover, and in the process exposes your location to reduce his own heat. You didn't just tip him off. You handed him leverage over you.\n\nNow the SGA is at your door and Cord is nowhere.`,
    choice: ['Run', 'Fight the charges — turn yourself in and negotiate'],
    idsForChoices: ['escapeEnding', 'surrenderEnding'],
    pictureForScene:""
    },



    stallSga: {
    text: `You shred documents, smash equipment, run water over everything you can. William buys time at the front door, claiming to be a confused homeowner. It gives you three minutes.\n\nBut three minutes isn't enough. An agent finds the residue. Finds your notebook — or a piece of it. It's enough to hold you. William is detained. You're detained.\n\nIn the interrogation room, a deal is quietly placed on the table.`,
    choice: ['Take the deal — cooperate with SGA', 'Refuse the deal and say nothing'],
    idsForChoices: ['surrenderEnding', 'deathSilence'],
    pictureForScene: ""
    },


    deathSilence: {
    text: `You say nothing. You know enough people in enough bad situations to know that cooperating doesn't always end the way they promise. You sit in silence through every session. Your lawyer — appointed, overworked — tells you they have enough to convict.\n\nCord's people send a message through a third party: if you talk, they'll make sure the consequences go beyond legal.\n\nThe pressure from all sides becomes a wall. You stop sleeping. You stop eating. The operation, the dream, the candy — it all feels very far away now.`,
    choice: ['Hold on — there has to be a way out', 'Accept the weight of it all'],
    idsForChoices: ['deathEnding', 'deathEnding'],
    pictureForScene: ""
    },


    burnEnding: {
    text: `You set fire to the main facility. It goes up faster than you expected. You and William run. The blaze draws every SGA agent in the area and buys you thirty minutes of chaos.\n\nBut the fire also takes everything. Your notebook. Your equipment. William's medical supplies. You're running with nothing but each other.\n\nIn the chaos, a burning beam falls. You don't see it in time.`,
    choice: ['Try to dodge', 'Push William clear'],
    idsForChoices: ['deathEnding', 'deathEnding'],
    pictureForScene: ""
    },


    fameRebuild: {
    text: `You return to Los Angeles a ghost. No one knows you're back. You build for six months in total silence — new identity, new contacts, new location. But the product is unmistakable. People recognize the quality before they recognize the name.\n\nThen a journalist writing about the underground food economy discovers a lead. She's not SGA. She's not Cord. She's someone who wants to tell the story of the best unlicensed candy operation the city has ever seen.\n\nYou meet her in a diner. She slides a recorder across the table and says, "Tell me everything."`,
    choice: ['Tell her everything — go public', 'Walk out of the diner'],
    idsForChoices: ['fameEnding', 'escapeEnding'],
    pictureForScene: ""
    },


    sooubwayEnd: {
    text: `You look at William. You look at your cramped makeshift lab. You look at your hands — stained with citric acid and the weight of all these close calls. And then you take a long, slow breath.\n\n"I'm going to get a job," you say.\n\nWilliam blinks. "A job."\n\n"At Sooubway."\n\nThe silence between you is enormous. Then William nods, very slowly, with the quiet dignity of a man who has seen much and judges nothing.\n\nYou walk into the Sooubway on Figueroa Street the next morning. You are hired on the spot. You make sandwiches. You are excellent at making sandwiches. Nobody raids you. Nobody threatens you. William visits on Thursdays and orders a twelve-inch with extra pickles.\n\nYou are, for the first time in a long time, at peace.\n\n✦ SECRET ENDING: THE SOOUBWAY CHRONICLES ✦\nYou chose the honest path. Not the most glamorous. Not the most profitable. But yours.`,
    choice: ['Play again'],
    idsForChoices: ['start'],
    pictureForScene: "",
    ending: 'secret'
    },


    escapeEnding: {
    text: `You're on a bus. Or a train. Or in the back of a borrowed car — the details don't matter. What matters is that the city is shrinking behind you, and ahead there's open road.\n\nWilliam is beside you, his medical bag between his feet, looking out the window at the desert passing at 70 miles per hour. He doesn't say anything for a long time. Then: "You know, I never actually liked Los Angeles."\n\nYou laugh — really laugh — for the first time in months.\n\nYou didn't get rich. You didn't get famous. You didn't get caught. You took the operation as far as you could, you protected the people who mattered, and you walked away on your own terms. The notebook is in your bag. The formulas are in your head. Wherever you land, you'll know what to do.\n\nSome places deserve a Purleman's.\n\n✦ ENDING: ESCAPE ✦\nYou survived. That's not nothing — in this city, in this game, survival is everything. You leave with your freedom, your partner, and your knowledge. The story doesn't end here. It just moves somewhere new.`,
    choice: ['Play again', 'Try a different start'],
    idsForChoices: ['start', 'start'],
    ending: 'escape',
    pictureForScene: ""
    },


    fameEnding: {
    text: `The article runs on a Sunday. By Monday, the story has been picked up nationally. By Wednesday, three different food media companies have reached out. By the following week, your name — your real name, Purleman — is being discussed in culinary circles as something between a legend and a cautionary tale.\n\nThe SGA opens a formal investigation, but the public attention makes it complicated. You've already retained a lawyer — a good one, paid for by the advance on a book deal you signed in a Culver City coffee shop. William Black, culinary mastermind and unlikely fugitive, has been offered a consulting role on a streaming food documentary.\n\nYou're not untouchable. But you're visible, which is its own kind of armor.\n\nThe candy — legitimized, licensed through a loophole your lawyer found in the SGA code — hits shelves in three states within a year. The pop rocks taste exactly like they always did. They just come in a box now with a label that says: PURLEMAN'S. EST. in the alley behind your old life.\n\n✦ ENDING: FAME & WEALTH ✦\nYou didn't just survive. You won. The underground became the mainstream, and the city that tried to swallow you whole learned your name instead. William got his treatment. You got your dream. And somewhere out there, a new kid with nothing but a hot plate and a notebook is reading your story.\n\nMaybe they'll do something with it.`,
    choice: ['Play again', 'Try a different start'],
    idsForChoices: ['start', 'start'],
    ending: 'fame',
    pictureForScene: ""
    },


    deathEnding: {
    text: `There are a lot of ways to lose in this city. Some of them are loud — the raid, the arrest, the verdict. Some of them are quiet — the weight of carrying something too big for too long, the way a person can disappear not all at once but piece by piece until the person you were is unrecognizable to the one looking back from the glass.\n\nYou made your choices. Some of them were brave. Some of them were desperate. Some of them were both at once, which is usually how the best and worst decisions feel in the moment.\n\nBut the city doesn't grade on a curve. The SGA doesn't care about your backstory. Cord doesn't care about your survival. And some walls you hit — some consequences you walk into — don't have a way out the other side.\n\nWilliam is somewhere safe. You made sure of that, in the end. That matters. It has to matter.\n\nThe candy was real, though. Whatever else happened — the product was real. The best unlicensed pop rocks in Los Angeles, made by a person who had nothing and almost made it work.\n\nAlmost.\n\n✦ ENDING: DEATH ✦\nNot every story ends with the hero walking away. Some end here — in the consequences of a world that doesn't forgive easily. Remember: every choice you made brought you to this moment. Choose differently next time.`,
    choice: ['Play again', 'Try a different start'],
    idsForChoices: ['start', 'start'],
    ending: 'death',
    pictureForScene: ""
  },


    surrenderEnding: {
    text: `You turn yourself in. It takes everything to walk through that door — more courage than any of the running, more strength than any of the producing. You sit down across from a Division 7 agent and you say: "I want to make a deal."\n\nThe negotiation is long. Months long. You cooperate. You give them distribution networks — not William, not anyone you actually care about, but enough. Your lawyer works the angles. The SGA gets their case. You get a reduced charge and two years of supervised release.\n\nWhen you walk out, William is waiting. He hands you a paper bag. Inside is a small plastic pouch of pop rocks — the good kind, your kind, made in his kitchen the night before.\n\n"I kept the formula alive," he says simply.\n\nYou eat one. It's perfect.\n\n✦ ENDING: SURRENDER ✦\nYou gave up the operation, but not the dream. Sometimes the bravest move is the one that keeps you alive for whatever comes next.`,
    choice: ['Play again', 'Try a different start'],
    idsForChoices: ['start', 'start'],
    ending: 'surrender',
    pictureForScene: ""
  }

};
