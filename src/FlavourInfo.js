export default function FlavourInfo(props) {

  const dogQuotes = [
    "Hey there, hooman! I see you've got a photo there. Let me tell you, if this picture were a dog, it'd be a mix of a Labrador Retriever and a Poodle. Smart and playful, just like me!",
    "Oh my dog! Look at that photo! If this picture were a tennis ball, I'd chase it all day long! Woof! By the way, did you know that dogs and developers have something in common? We both love fetch!",
    "Bork bork! What do we have here? A photo? Well, if this picture were a trick, it'd be a high-five combined with a backflip! It's all about that wow factor, hooman!",
    "Woof woof! You've captured something amazing in that photo! It's like a bone buried in the code, waiting to be discovered. Sniff it out, dig it up, and enjoy the treat of success!",
    "Oh my paws and whiskers! This photo is pure gold! If this picture were a belly rub, it'd tickle your soul and make you giggle with delight. Embrace the joy!",
    "Ruff ruff! Look at that snapshot! If this picture were a fluffy cloud, it'd rain joy and happiness, bringing smiles to everyone who looks at it. Let the happiness pour!",
    "Wooferino! What an epic photo you've got there! If this picture were a squirrel, it'd be the fastest, most elusive squirrel in the park. Chase it, catch it, and conquer it!",
    "Bark bark! That photo made my tail wag like crazy! It's like a ball bouncing between moments, capturing memories and freezing them in time. Join the excitement, hooman!",
    "Hey, you! Yes, you with the photo! Let me tell you something: it's like a never-ending game of fetch. You throw moments, and they come back to you filled with joy and nostalgia. Keep the game going!",
    "Woof woof! Look at this masterpiece captured in pixels! If this picture were a chew toy, it'd keep your heart happy and your spirit playful. Sink your teeth into it and enjoy the fun!",
    "Hey there, companion! That photo caught my attention! It's like a wagging tail, full of life and happiness. Embrace the wag, and let it brighten your day!",
    "Bork! This photo is absolutely paw-some! If this picture were a wagging tongue, it'd lick away your worries and leave you with a slobbery smile. Embrace the doggo spirit!",
    "Arf arf! That photo made my floppy ears stand up with joy! It's like a treat, rewarding your efforts and capturing a moment worth cherishing. Savor the flavor of happiness!",
    "Oh my dogness! Look at that photo! If this picture were a superhero, it'd be Captain Happy, swooping in to brighten your day with its mighty powers. Stay vigilant, and let the joy prevail!",
    "Woofers gonna woof! This photo deserves a howl of appreciation! It's like a loyal companion, evoking fond memories and bringing warmth to your heart. Let's celebrate the beauty of life!",
  ];

    return (
        <div id="flavourInfo">
          <img id="flavourInfoDogImage" src={props.dogData.message}></img>
          <p id="flavourInfoText">{
            dogQuotes[Math.round((Math.random() * dogQuotes.length))]
          }</p>  
        </div>
    )
}