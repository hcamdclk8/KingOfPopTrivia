/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 */
var questions = [
	{
        "What Madonna ballad contains the lines, I never wanted anyone like this - It's all brand new - You'll feel it in my kiss?": [
            "Crazy For You",
            "You'll See",
            "Love Don't Live Here Anymore",
            "Take A Baow"
        ]
    },
    {
        "What Mariah Carey ballad contains the lyric, When you left me I lost a part of me?": [
            "We Belong Together",
            "Don't Forget About Us",
            "Can't Let Go",
            "I Still Believe"
        ]
    },
    {
        "What Taylor Swift hit contains the lines, You're my nightmare dressed like a daydream": [
            "Blank Space",
            "Love Story",
            "Shake It Off",
            "Bad Blood"
        ]
    },
    {
        "What One Direction song contains the lyric, I might never be your knight in shining armor, I might never be the one you take home to mother.": [
            "Perfect",
            "What Makes You Beautiful",
            "Drag Me Down",
            "Story Of My Life"
        ]
    },
    {
        "What Maroon Five song contains the lines, I'm hurting baby, I'm broken down. I need your loving, I need it now": [
            "Sugar",
            "She will be loved",
            "Maps",
            "Moves like Jagger"
        ]
    },
    {
        "What Bruno Mars song contains the lines, I would go through all this pain, Take a bullet straight through my brain?": [
            "Grenade",
            "Just The Way You Are",
            "When I Was your Man",
            "Locked Out of Heaven"
        ]
    },
    {
        "What Rhianna song contains the lines, Its the way I'm feeling, I just can't deny. But I've gottta let it go.?": [
            "We Found Love",
            "Stay",
            "Diamonds",
            "Love The Way You Lie"
        ]
    },
    {
        "What Selena Gomez ballad contains the lyric, Take away your things and go, You can't take back what you said, I know": [
            "Same Old Love",
            "Good For You",
            "I Want you to know",
            "Love you like a love song"
        ]
    },
    {
        "What Michael Jackson tune contains the lines, People always told me, be careful what you do.": [
            "Billie Jean",
            "Beat It",
            "The Way You Make Me Feel",
            "I'll Can't Stop Loving You"
        ]
    },
    {
        "What Justin Beeber tune contains the lines, When you nod your head yes, but you wanna say no": [
            "What do you mean",
            "Sorry",
            "Where are you now ?",
            "Love Yourself"
        ]
    },
    {
        "What George Michael ballad contains the lines, And if there is all that there is, is this fear of being used. I should go back being lonely and confused": [
            "A Different Corner",
            "Kissing A Fool",
            "One More Try",
            "Father Figure"
        ]
    },
    {
        "Which Adele song contains the lyric, I'm in California dreaming about who we used to be, When we were younger and free?": [
            "Hello",
            "When We Were Young",
            "Rollin' in the Deep",
            "Someone Like You"
        ]
    },
    {
        "Which Justin Timberlake song contains the lines, That vacancy that sat in my heart, is a space that now you hold?": [
            "Mirrors",
            "Suit and Tie",
            "Not A Bad Thing",
            "Cry Me a River"
        ]
    },
    {
        "Which Katy Perry tune contains the lyric, I finally found you, my missing puzzle piece. I'm complete": [
            "Teenage Dream",
            "I Kissed a Girl",
            "Fireworks",
            "The One That Got Away"
        ]
    },
    {
        "Which Lady Gaga tune contains the lines, I want your ugly, I want your disease, I want your everything. As long as its free": [
            "Bad Romance",
            "Poker Face",
            "Telephone",
            "Born This Way"
        ]
    },
    {
        "What Kelly Clarkson song contains the lyric, How come I've never heard you say, I just want to be with you. Guess you never felt that way": [
            "Since You've Been Gone",
            "My Life Would Suck without you",
            "Because of you",
            "The Trouble With Love Is"
        ]
    },
    {
        "What Boyz Two Men song contains the lines, Throw your clothes on the floor. I'm gonna take my clothes off too?": [
            "I'll Make Love To You",
            "End Of The Road",
            "On Bended Knee",
            "It's so hard to say goodbye to yesterday"
        ]
    },
    {
        "Which Lady Antebellum song contains the lyric, Picture perfect memories scattered all around the floor. Reaching for the phone cause I can't fight it anymore?": [
            "Need You Now",
            "Just A Kiss",
            "I Run To you",
            "Falling For You"
        ]
    },
    {
        "Which Madonna tune contains the lines, I made it through the wilderness, somehow I made it through. Didn't know how lost I was, until I found you.": [
            "Like A Virgin",
            "Crazy For Your",
            "Borderline",
            "Open Your Heart"
        ]
    },
    {
        "Which Backstreet Boys ballad contains the lines, You are my fire, the one desire?": [
            "I Want It That Way",
            "I'll Never break your heart",
            "As Long As You love me",
            "Quit Playing Games"
        ]
    },
    {
        "Which Taylor Swift tune contains the lines, You got that James Dean daydream look in your eye, And I got that red lip classic thing that you like?": [
            "Style",
            "Wildest Dreams",
            "Blank Space",
            "You Belong To Me"
        ]
    },
    {
        "What Alanis Morrisette song contains the lines, And every time I scratch my nails down someone else's back, I hope you feel it. Well can you feel it?": [
            "You Oughta Know",
            "Hands Clean",
            "Ironic",
            "Uninvited"
        ]
    },
    {
        "What Ellie Goulding song contains the lines, Every inch of your skin is a holy grail I've got to find, only you can set my heart on fire, on fire?": [
            "Love Me Like You Do",
            "Lights",
            "Burn",
            "Outside"
        ]
    },
    {
        "What Sheena Easton song contains the lyric, Time heals all wounds they say, and I should know. Cause it seems like forever, I'm letting you go?": [
            "Almost Over You",
            "For Your Eyes Only",
            "Do It For Love",
            "Wind Beneath My Wings"
        ]
    },

    {
        "What Paula Abdul song contains the lines, You're the whisper of my summer breeze. You're the kiss that put my soul at ease?": [
            "Rush, Rush",
            "Blowing Kisses In the Wind",
            "Next To You",
            "The Way That You Love Me"
        ]
    },
    
    {
        "What Madonna song contains the lines, I don't want to cause you any pain, but I love you just the same. And you'll always be my baby?": [
            "Bad Girl",
            "Byb Bye Baby",
            "Rain",
            "Erotica"
        ]
    },
    
    {
        "What Tears for Fears song contains the lyric, I find it kind of funny, I find it kind of sad. The dreams in which I'm dying are the best I've ever had?": [
            "Mad World",
            "Head over Heels",
            "Mother's Talk",
            "Pale Shelter"
        ]
    },
    
    {
        "What Janet Jackson tune contains the lyric, All my life I've waited, to see your smile again. In my mind I hated, not able to let go?": [
            "Come Back To Me",
            "Let's Wait Awhile",
            "Together Again",
            "That's The Way Love Goes"
        ]
    },
    
    {
        "What Madonna tune contains the line, 'Cause the boy with the cold hard cash is always Mr. Right?": [
            "Material Girl",
            "Dress You Up",
            "Into The Groove",
            "Lucky Star"
        ]
    },
    {
        "What Madonna song contains the lyric, Something in the way you love me won't let me be. I don't want to be your prisoner so baby won't you set me free": [
            "Borderline",
            "Everybody",
            "True Blue",
            "Crazy For You"
        ]
    }
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
		 
     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.55436111-f886-4f48-aa7a-4fb8833edc57") {
         context.fail("Invalid Application ID");
      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4,
    GAME_LENGTH = 5;

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        cardTitle = "Name That Tune Trivia",
        speechOutput = "Name That Tune Trivia. I will ask you " + GAME_LENGTH.toString() 
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin.",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [],
        randomNum;

    // Pick 5 random questions from the list to ask the user, make sure there are no repeats
    while (gameQuestions.length != GAME_LENGTH) {
        randomNum = Math.floor(Math.random() * (questions.length - 1));
        if (gameQuestions.indexOf(randomNum) == -1) {
            gameQuestions.push(randomNum);
        }
    }
    return gameQuestions;
}

function populateRoundAnswers(gameQuestions, index, correctAnswer) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswer variable
    var answers = [],
        answersCopy = questions[gameQuestions[index]][Object.keys(questions[gameQuestions[index]])[0]],
        temp, i;
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswer];
    answers[correctAnswer] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var cardTitle = "Name That Tune Trivia",
        speechOutput = "";

    var answerSlot = intent.slots.Answer;
    // If the user provided answer isn't a number > 0 and < 5,
    // return an error message to the user
    if (!answerSlot || !answerSlot.value || isNaN(parseInt(answerSlot.value))
        || !(parseInt(answerSlot.value) < ANSWER_COUNT+1 && parseInt(answerSlot.value) > 0)) {
        speechOutput = "Your answer must be a number between 1 and 4."
        callback(session.attributes,
            buildSpeechletResponse(cardTitle, speechOutput, speechOutput, false));
    }
    else {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game
        if (!session.attributes || !session.attributes.questions) {
            speechOutput = "There is no game in progress. To start a new game, say, " +
                "start game.";
            callback(session.attributes,
                buildSpeechletResponse(cardTitle, speechOutput, speechOutput, false));
        }
        else {
            var gameQuestions = session.attributes.questions,
                correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
                currentScore = parseInt(session.attributes.score),
                currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
                correctAnswerText = session.attributes.correctAnswerText;

            var speechOutputAnalysis = "";
            if (parseInt(answerSlot.value) == correctAnswerIndex) {
                currentScore++;
                speechOutputAnalysis = "correct. ";
            } else {
                speechOutputAnalysis = "wrong. The correct answer is " + correctAnswerText + ". ";
            }
            // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
            if (currentQuestionIndex == GAME_LENGTH - 1) {
                speechOutput = "That answer is " + speechOutputAnalysis + "You got " +
                    currentScore.toString() + " out of " + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
                callback(session.attributes,
                    buildSpeechletResponse(cardTitle, speechOutput, "", true));
            }
            else {
                currentQuestionIndex += 1;
                var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
                // Generate a random index for the correct answer, from 0 to 3
                correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
                var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                    questionIndexForSpeech = currentQuestionIndex + 1,
                    repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
                for (var i = 0; i < ANSWER_COUNT; i++) {
                    repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
                }
                speechOutput += "That answer is " + speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

                var sessionAttributes = {
                    "speechOutput": repromptText,
                    "repromptText": repromptText,
                    "currentQuestionIndex": currentQuestionIndex,
                    "correctAnswerIndex": correctAnswerIndex + 1,
                    "questions": gameQuestions,
                    "score": currentScore,
                    "correctAnswerText":
                        questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
                };
                callback(sessionAttributes,
                    buildSpeechletResponse(cardTitle, speechOutput, repromptText, false));
            }
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH.toString() + " multiple choice questions, try to get as many right as you can! "
        + "To give an answer to a question, respond with the number of the answer by saying one, two, three, or four. "
        + "To start a new game at any time, say, start game. "
        + "To repeat the last question asked, say, repeat.",
        repromptText = "To give an answer to a question, respond with the number of the answer. "
        + "To start a new game, say, start game",
        shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}