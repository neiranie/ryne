/* =========================================================
   LOGIN — change the test account here
   ========================================================= */
const CREDENTIALS = {
  username: "ryne",
  password: "ryne010626"
};

/* =========================================================
   50 LETTER TITLES — edit the words here.
   The actual letter text lives below, in LETTER_BODIES.
   ========================================================= */
const LETTERS = [
  /*0*/ "sad for no reason",
  /*1*/ "missing me",
  /*2*/ "uncertain about where you stand",
  /*3*/ "lonely",
  /*4*/ "disappointed with how things turned out",
  /*5*/ "unheard or invisible",
  /*6*/ "angry at me",
  /*7*/ "needing a hug",
  /*8*/ "feeling worthless",
  /*9*/ "unable to sleep",
  /*10*/ "homesick",
  /*11*/ "about to take an exam",
  /*12*/ "done crying",
  /*13*/ "alone in a crowded room",
  /*14*/ "needing reminding you matter",
  /*15*/ "missing being held from behind",
  /*16*/ "having the hardest day",
  /*17*/ "ready to give up",
  /*18*/ "feeling insecure",
  /*19*/ "craving playful moments with me",
  /*20*/ "needing a reason to smile",
  /*21*/ "craving my hug",
  /*22*/ "overthinking at midnight",
  /*23*/ "feeling like a failure",
  /*24*/ "upset after a fight with me",
  /*25*/ "missing the sound of my voice",
  /*26*/ "needing proof we're okay",
  /*27*/ "exhausted by everything",
  /*28*/ "wanting to be heard",
  /*29*/ "missing the little things I do",
  /*30*/ "just nothing",
  /*31*/ "when you stressed",
  /*32*/ "remembering how we met",
  /*33*/ "feeling far from me",
  /*34*/ "needing reminding that I love you",
  /*35*/ "caught in the rain and missing me",
  /*36*/ "when at the airport",
  /*37*/ "feeling ignored",
  /*38*/ "needing encouragement",
  /*39*/ "missing our inside jokes",
  /*40*/ "finding it hard to talk to me",
  /*41*/ "wondering if I'm still here",
  /*42*/ "missing our random little moments",
  /*43*/ "tired of being strong",
  /*44*/ "waking from a bad dream",
  /*45*/ "can't decide what to eat",
  /*46*/ "when in the plane",
  /*47*/ "missing laughing together",
  /*48*/ "unable to shake off today before bed",
  /*49*/ "whenever you miss me, really"
];

/* =========================================================  // ADDED
   LETTER BODIES — write the actual letter text here.
   Key = index number matching the title's position in LETTERS
   above (starting at 0). Any index left out will show a
   placeholder reminder instead, so you can fill these in
   gradually.
   ========================================================= */
const LETTER_BODIES = {  // ADDED
  0: `no reason needed for today's heaviness, just let it sit with you for a while, curl up, breathe slow, and be soft with your own heart today`,
  1: `every mile between us is just space, not distance, close your eyes for a second and you'll find me right there in your favorite memories, always on your mind`,
  2: `your mind's playing tricks on you again, so here's the truth, plain and simple, you're safe with me, nothing's changed, and i'm not going anywhere`,
  3: `even when the world feels quiet and far away, you're still wrapped up in so much love, reach out and you'll find my hand already there waiting for yours`,
  4: `it stings when things don't go the way you hoped, let yourself feel that for a bit, this one moment isn't your whole story, better days are coming`,
  5: `your voice matters to me, every single time, even on days you feel like the world's looking past you, i see all of you, you're never invisible to me`,
  6: `it's okay to be mad at me, i'm sorry if i hurt you, take whatever time you need, just know my love for you doesn't go anywhere, even when we're upset`,
  7: `wrap your arms around yourself and hold on tight, pretend it's me, holding you close, warm and safe, and if you need a little extra, grab osvald and hold him too, we're both not letting go until you feel okay again`,
  8: `whatever your head's telling you right now is lying to you, you bring so much good into this world just by being in it, you mean more than you know`,
  9: `staring at the ceiling with your mind racing is exhausting, take a slow breath, let the quiet hold you, everything else can wait till morning, just rest`,
  10: `missing home can leave this quiet ache in your chest, but you carry that warmth with you everywhere, hold onto it, you're building something good right where you are`,
  11: `you've put in the work, you're smarter and stronger than your nerves are telling you right now, take a breath, trust yourself, go show up for you`,
  12: `let it all out, every tear, you don't have to hold it together right now, cry as long as you need, i'm right here after, no rush`,
  13: `it's a strange kind of lonely, being surrounded by people and still feeling far away, but even from here, my heart's tuned right into yours`,
  14: `in case no one's said it today, the world's a better place with you in it, your kindness, your smile, all of it matters, especially to me`,
  15: `i wish i could pull you in right now, close your eyes and picture my arms around you from behind, holding you steady, warm and close`,
  16: `some days just hit hard, all at once, you don't have to fix everything today, just get through this hour, i'm cheering for you through the storm`,
  17: `hold on a little longer, you've made it through every hard day so far, rest instead of quitting, let me carry some of the weight with you for a bit`,
  18: `your mind's zooming in on things nobody else even notices, you're more than enough, exactly as you are, you don't have to change a thing to be loved`,
  19: `some days you just need to be silly with me, tease me, laugh at nothing, do something ridiculous, that playful spark between us is one of my favorite things about us`,
  20: `think of your favorite food cooking or how ridiculous we look laughing together there is still so much sweetness waiting for you`,
  21: `i wish more than anything i could hold you right now, close your eyes, picture me pulling you in, your head on my shoulder, holding on tight`,
  22: `late nights love turning small worries into mountains, none of those midnight thoughts are telling you the truth, lay your head down, let it go till morning`,
  23: `messing up or hitting a wall doesn't make you a failure, it just makes you human and trying, nothing about progress is a straight line, i'm proud of you`,
  24: `i hate when we fight, i'm sorry for my part in it, take the space you need, but know i'm still here and we'll be okay, we always are`,
  25: `i wish i could just whisper something soft in your ear right now, read this slow, imagine my voice, telling you it's all going to be alright`,
  26: `if you need it in words, here it is... we're okay, i'm not upset, i'm not distant, we're exactly as good as we've always been`,
  27: `when even existing feels tiring, you don't have to be strong or productive right now, drop your shoulders, unclench your jaw, just let yourself rest without guilt`,
  28: `your thoughts, your feelings, your rambling stories, all of it matters to me, you're never bothering me by talking, i'm always here, ready to listen`,
  29: `all those small habits and silly little things i do are just my quiet way of showing you i care, holding onto them till we're together again`,
  30: `not sad, not happy, just quiet inside, that's okay too, you don't need a reason to feel nothing for a while, i'm just here with you either way`,
  31: `when everything feels like too much, stop for a second, breathe, you don't have to carry it all right now, let it wait a beat, i'm right here`,
  32: `sorry, for just leaving an emoji reaction on your hi back then instead of writing back, it's strange to think about now, how many times we crossed paths before that, airports, random places, cafes, all by chance, and we never even talked, and then it took a student exchange program for us to finally say something to each other, it almost feels like the universe kept trying to put us in the same place, until we finally listened, i still smile thinking about how we started, out of everyone, everywhere, somehow it was us, still one of my favorite things that ever happened`,
  33: `distance is just numbers, it doesn't touch how close our hearts are, no matter how many miles are between us, you're still the nearest person to me`,
  34: `i love you on the quiet mornings, the messy afternoons, the late nights, happy or sad or grumpy, it's never conditional, it's just always there`,
  35: `hearing the rain right now makes me wish you were here, dancing around in it with me, that's still on my list of things i want us to do together, for now stay dry and warm, we'll get our rain day eventually`,
  36: `airports hold a soft spot for us, that's where it all started after all, i wish i could be right there with you now, holding your hand through the wait, but until then, just know i'm with you in every way that counts`,
  37: `i'm sorry if i ever made you feel like an afterthought, you're never that to me, the second i can, you've got my full attention, i promise`,
  38: `you can handle so much more than you give yourself credit for, trust yourself, take the next step, i'm in your corner cheering you on the whole way`,
  39: `thinking about the moments we couldn't stop laughing over something no one else got still makes me grin, that's proof of how good we are together`,
  40: `words don't always come easy, and that's fine, you don't need perfect sentences with me, silence or one emoji is enough, i'm here, no judgment`,
  41: `i'm not going anywhere, through the good days, the bad days, and every boring one in between, i'm right here, staying, always`,
  42: `the unplanned little moments, like watching you paint that red panda that turned out so funny looking, those are secretly my favorite, that's what makes us us`,
  43: `you've been carrying so much for way too long, it's okay to put it down for a bit, let your guard down, cry if you need to, just be soft`,
  44: `shake off whatever that dream was, you're awake now, you're safe, none of it can reach you here, take a breath and drift back off, it's okay`,
  45: `thinking about what to eat for the hundredth time and still can't decide, don't you want meat though, isn't that your favorite, anyway just eat whatever's halal and whatever you're craving, just please don't skip a meal, and take care of your health too`,
  46: `flying always makes me think of you, i just hope you're being careful on the way, buckle up, stay safe, and text me the second you land`,
  47: `that loud, belly-ache laugh we share is still my favorite sound in the world, hold onto that memory, we'll be making each other laugh like that again soon`,
  48: `today was probably messy and long, but it's over now, set the worries down, close your eyes, let sleep wipe it clean for a fresh start tomorrow`,
  49: `whenever that ache of missing me hits, know that i'm feeling it too, every second apart is just bringing us closer to the next time we're together`,
};

/* =========================================================
   ONE envelope drawing, reused everywhere — this is what
   keeps every stroke width and seal identical across all
   50 cards and the blurred backdrop on the letter page.
   ========================================================= */
function envelopeSVG(uid){
  uid = uid !== undefined ? uid : Math.random().toString(36).slice(2);
  return `
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="envBody-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F0925E"/>
        <stop offset="50%" stop-color="#E77B49"/>
        <stop offset="100%" stop-color="#C25A32"/>
      </linearGradient>
      <linearGradient id="envFlap-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#F6A87C"/>
        <stop offset="100%" stop-color="#D9743F"/>
      </linearGradient>
      <linearGradient id="envShadowGrad-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#7A3419" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#7A3419" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="envSeal-${uid}" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#A85A38"/>
        <stop offset="100%" stop-color="#7A3E24"/>
      </radialGradient>
    </defs>

    <!-- envelope body -->
    <rect x="1.5" y="1.5" width="197" height="137" rx="10" fill="url(#envBody-${uid})"/>

    <!-- shadow cast by the flap -->
    <path d="M6 6 L100 84 L194 6 L194 34 L100 108 L6 34 Z" fill="url(#envShadowGrad-${uid})"/>

    <!-- top flap -->
    <path d="M1.5 11.5 Q1.5 1.5 11.5 1.5 L188.5 1.5 Q198.5 1.5 198.5 11.5 L100 86 Z" fill="url(#envFlap-${uid})"/>

    <!-- thin highlight along the fold line -->
    <path d="M6 6 L100 82 L194 6" fill="none" stroke="#FFD9BA" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round" opacity="0.55"/>

    <!-- heart seal -->
    <circle cx="100" cy="86" r="17" fill="url(#envSeal-${uid})"/>
    <path d="M100 94.5c-4.5-4-9-7.6-9-11.6 0-2.9 2.4-5 5.1-5 1.7 0 3.1.9 3.9 2.3.8-1.4 2.2-2.3 3.9-2.3 2.7 0 5.1 2.1 5.1 5 0 4-4.5 7.6-9 11.6z" fill="#FBF6F1"/>
  </svg>`;
}

/* helper: fade-navigate (shared by every page) */
function goTo(url){
  document.body.classList.remove('fade-in');
  document.body.classList.add('fade-out');
  setTimeout(() => { window.location.href = url; }, 380);
}
window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => document.body.classList.add('fade-in'));
});