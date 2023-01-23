// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health; //objts q vao variar de acordo com o valor passado pelo parametro na classe filho
        this.strength = strength;
    }

    attack(){ // retorna a forca do personagem
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;

    }
}

// Viking
class Viking  extends Soldier{ //extends === herda "classe filho" da classe informada "psi", no caso Soldier
    constructor(name, health, strength) {
      super(health, strength);// usa p preencher o constructor da classe "pai/Character" p classe filho
      // e usa p subir p classe pai pra preencher esses dados
      this.name = name;
    }

    receiveDamage(damage){ //dano do personagem
        this.health = this.health - damage;

        if (this.health > 0){ // se a vida for > 0
            return `${this.name} has received ${damage} points of damage`;
        } else if (!this.health > 0){ //!this.health > 0 (negacao de q eh maior q 0)
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health - damage;

    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;

    }

        else if (!this.health > 0) {
            return "A Saxon has died in combat"
        }
        
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
      }

      addViking(viking) {
        this.vikingArmy.push(viking); /* metodo push() e particular de arrays, ele adiciona elemento
        no fim do arr e ja retorna o array com a nova lenght, se a propriedade lenght n existir, ela eh criada automaticamnete*/
      }

      addSaxon(saxon) {
        this.saxonArmy.push(saxon);
        
      }
}
