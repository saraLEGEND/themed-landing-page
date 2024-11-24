class SaraLegend {
  name: string;
  skills: string[];
  optimism: boolean;
  hobbies: string[];
  superpowers: string[];
  catchphrase: string;

  constructor() {
    this.name = 'Sarah Legende';
    this.skills = ['HTML', 'CSS', 'JavaScript', 'Angular', 'Java', 'Spring Boot', 'MySQL'];
    this.optimism = true;
    this.hobbies = ['Reading', 'Cooking', 'Traveling'];
    this.superpowers = ['Lifelong Learner', 'Reliable', 'Resilient'];
    this.catchphrase = 'Coding my way to legend!';
  }

  displaySkills(): void {
    console.log(`✨ ${ this.name }'s Skills: ${ this.skills.join(', ') }`);
  }

  shareHobbies(): void {
    console.log(`🎉 When ${ this.name } is not coding, you'll find her: ${ this.hobbies.join(', ') }.`);
  }

  inspire(): void {
    if (this.optimism) {
      console.log(`🌟 ${ this.name } says: "Keep learning, keep growing, and never stop building amazing things!"`);
    } else {
      console.log(`${ this.name } is taking a moment to recharge.`);
    }
  }
}
