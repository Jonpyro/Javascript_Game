// const gameDisplay = document.getElementById('displayWindow');
// const heroSc = document.getElementById('heroScrean');
// const econSc = document.getElementById('encoScrean');
// const popUp = document.getElementById('PopupScrean');
// //not changing form popUp, to keep things simple.
// const builder = document.getElementById('game');
// let nextBtn;

// function startUp() {
//     gameStart.init();
//     builder.style.display = 'grid';
//     var ctx = gameDisplay.getContext('2d');
//     ctx.fillStyle = 'gray';
//     ctx.fillRect(0, 0, 450, 450);
//     start.style.display += 'none';
//     heroSc.innerHTML = `<p>Name: ${chars[0].name}</p>
//     <p>Hp: ${chars[0].Hp}</p>
//     <p>Attack Dammage: ${chars[0].Dp}</p>
//     <p>Armor: ${chars[0].Ap}</p>`
//     econSc.innerHTML = `<p>Room: ${gameStart.roomNumber}</p>`
//     popUp.innerHTML = `<p>You have just entered the Kings dungeon, now you must fight your way through to survive!</p>
//     <button id="nextBtn">Venture forth!</buton>`
//     nextBtn = document.getElementById('nextBtn');
//     nextBtn.addEventListener('click', ()=>{
//             console.log('click')
//             if(chars[0].Hp > 0){

//                 gameStart.roomNumber++ ;
//             }
//         });
//     console.log(nextBtn)
//     return;
// };

// let gameOver = false;
// const gameOverText = "You have Died!"
// const chars = [
//     Hero = {
//         name: 'Hero',
//         Hp: 100,
//         Dp: 5,
//         Ap: 0,
//         Mp: 15,
//         equipment: [],
//         spells: [],
//         gold: 0,
//     },
//     Boss = {
//         Hp: 350,
//         Dp: 20,
//         Ap: 15,
//     },

// ]
// const monsters = [
//     Goblin = {
//         Hp: 5,
//         Dp: 5,
//         Ap: 0,
//     },
//     Orc = {
//         Hp: 15,
//         Dp: 10,
//         Ap: 0,
//     },
//     Zombie = {
//         Hp: 35,
//         Dp: 5,
//         Ap: 0,
//     }
// ]
// const encounters = [
//     StartRoom = {
//         id: 'StartRoom',
//         Name:  'Start Room'
//     },
//     fight = {
//         id: "fightRoom",
//         Name: 'Fight'
//     },
//     'item',
//     'heal',
// ]
class Game {
    constructor() {
        this.roomNumber = 0
        this.dungeonNumber = 1
        this.win = false
        this.gameOver = false
        this.gameOverText = '<p>You have Died, trye again!</p><button id="reset>Restart</button>'
        this.turn = true
        this.chars = [
            {
                character: 'Hero',
                name: 'Hero',
                Hp: 100,
                Dp: 5,
                Ap: 0,
                Mp: 15,
                equipment: [],
                gold: 5
            },
            {
                character: 'Boss',
                name: 'Boss',
                img: 'media/MageKing.png',
                Hp: 40,
                Dp: 10,
                Ap: 5,
                gold: 100
            }
        ]
        this.boss = {
            name: '',
            Hp: 0,
            Dp: 0,
            Ap: 0,
            gold: 0
        }
        this.monsters = [
            {
                name: 'Goblin',
                img: 'media/goblin1.png',
                Hp: 10,
                Dp: 5,
                Ap: 0,
                gold: 5
            },
            {
                name: 'Golem',
                img: 'media/golem.png',
                Hp: 20,
                Dp: 5,
                Ap: 1,
                gold: 10
            },
            {
                name: 'Zombie',
                img: 'media/zombie2.png',
                Hp: 15,
                Dp: 10,
                Ap: 0,
                gold: 15
            }
        ]
        this.fightMon = {
            name: '',
            Hp: 0,
            Dp: 0,
            Ap: 0,
            gold: 0,
        }
        // console.log(this.monsters[0])
        this.items = [
            {
                item: 'Sword of ouchies',
                Dp: 5
            },
            {
                item: 'Shield of ok defense',
                Ap: 5
            }
        ]
        this.shopItems = [
            {
                item: 'Battleaxe of Pain',
                Dp: 10,
                cost: 30
            },
            {
                item: 'Tower Shield of Purity',
                Ap: 10,
                cost: 25
            },
            {
                item: 'Heath Potion',
                Hp: 15,
                cost: 10
            }
        ]
        this.encounters = [
            {
                id: 1,
                encounter: 'Item Room',
                name: 'Item Room'
            },
            {
                id: 2,
                encounter: 'Fight Room',
                name: 'Fight Room',
                actions: [
                    `<button id="attack">Attack</button>`,
                    `<button id="block">Pass</button>`
                ]
            },
            {
                id: 3,
                encounter: 'Healing Room',
                name: 'Healing Room'
            },
            {
                id: 4,
                encounter: 'Trap',
                name: 'Trap Room'
            }
        ]
        // this.encounter = randomeEncounter;
        this.gameDisplay = document.getElementById('displayWindow')
        this.heroSc = document.getElementById('heroScrean')
        this.econSc = document.getElementById('econScrean')
        this.popUp = document.getElementById('PopupScrean')
        this.builder = document.getElementById('game')
        this.img = 'media/back_cave.png'
    }

    init() {
        // this.loadImg();
        let chars = this.chars;
        let gameDisplay = this.gameDisplay;
        let heroSc = this.heroSc;
        let econSc = this.econSc;
        let popUp = this.popUp;
        //not changing form popUp, to keep things simple.
        let builder = this.builder;
        let img = document.createElement('img')
        img.src = this.img
        // let goblin = this.monsters[0];
        // img.width = gameDisplay.width;
        // img.height = gameDisplay.height
        console.log(img)
        // let goblinImg = document.createElement('img')
        // goblinImg.src = goblin.img;

        builder.style.display = 'grid';
        var ctx = gameDisplay.getContext('2d');
        ctx.drawImage(img, 0, 0, 450, 450);
        // ctx.drawImage(goblinImg, 0, 0, 450, 450);
        // ctx.fillRect(0, 0, 450, 450);
        // start.style.display = 'none';
        heroSc.innerHTML = `<p>Name: ${chars[0].name}</p>
        <p>Hp: ${chars[0].Hp}</p>
        <p>Attack Damage: ${chars[0].Dp}</p>
        <p>Armor: ${chars[0].Ap}</p>
        <p>Gold: ${chars[0].gold}</p>`
        econSc.innerHTML = `<p>Room: ${this.roomNumber}</p><p>Dungeon: ${this.dungeonNumber}`
        popUp.innerHTML = `<p>You have just entered the Kings dungeon, now you must fight your way through to survive!</p>
        <button id="nextBtn">Venture forth!</buton>`

        // const nextBtn = document.getElementById('nextBtn');
        // nextBtn.addEventListener('click', () => {
        //     console.log('click')
        //     if (chars[0].Hp > 0) {

        //         this.roomNumber++;
        //     }
        // });
        this.nextButton();
    }
    nextButton() {
        // const econSc = document.getElementById('encoScrean');
        const nextBtn = document.getElementById('nextBtn');
        let gameDisplay = this.gameDisplay;
        var ctx = gameDisplay.getContext('2d');
        const chars = this.chars;
        let roomNum = this.roomNumber
        nextBtn.addEventListener('click', () => {
            // console.log('clicked')
            if (chars[0].Hp > 0 && roomNum < 15) {
                roomNum++;
                ctx.clearRect(0, 0 , 450, 450)
                let img = document.createElement('img')
                img.src = this.img
                ctx.drawImage(img, 0, 0, 450, 450);
                console.log(roomNum);
                // this.roomNumber = this.roomNumber++;
                // console.log(this.roomNumber);
                this.econSc.innerHTML = `<p>Room: ${roomNum}</p><p>Dungeon: ${this.dungeonNumber}</p>`
                this.roomNumber = roomNum;
                this.roomGen();
            } else if(this.gameOver == true) {
                
                gamePlay = false;
                popUp.InnerHTML = `<p>${this.gameOverText}</p>`
            }
        })
    }
    progression() {

        if (this.roomNumber <= 15) {
            gamePlay = true;
        } else {
            gamePlay = false;
        }
    }

    roomGen() {
        let popUp = this.popUp;
        let roomNum = this.roomNumber;
        let encounters = this.encounters;
        // let monsters = this.monsters;
        // let monIndx = Math.ceil(Math.random() * monsters.length)
        // let ranMon = monsters[monIndx];
        let encoIndx = Math.floor(Math.random() * encounters.length)
        let randomEnco = encounters[encoIndx];
        let chars = this.chars;
        if (roomNum < 15) {
            console.log('Next Room')
            console.log(encoIndx);
            console.log(randomEnco);
        } else if (roomNum = 9) {
            console.log('boss fight');

        }
        if (randomEnco.id === 1) {
            popUp.innerHTML = `<p>You enter a room with three pedestals. On one, is a small sack of gold, on another, a weapon. The final pedestal has upon it, a peice of armor.</p><button id="choose">Choose Wisely</button>`
            let choose = document.getElementById('choose');
            choose.addEventListener('click', () => {
                // e.preventDefault;
                this.itemRoom();
            })
        }
        if (randomEnco.id === 2) {
            popUp.innerHTML = `<p>A monster stands in your way. You have no option but to fight it!</p><button id="beginFight">Fight</button>`

            let beginFight = document.getElementById('beginFight');
            beginFight.addEventListener('click', () => {
                // e.preventDefault;
                this.fightRoom();
            })
        }
        if (randomEnco.id === 3) {
            popUp.innerHTML = `<p>You enter a room with a healing fountain.</p> <button id="heal">Drink</button><button id="pass">Leave</button>`
            let heal = document.getElementById('heal');
            let pass = document.getElementById('pass');
            pass.addEventListener('click', () => {
                popUp.innerHTML = `<p>You're right, who needs healing anyways?</p><button id="nextBtn">Venture forth!</buton>`
                this.nextButton();
            })
            heal.addEventListener('click', () => {
                console.log('click');
                this.healRoom();
            })
        }
        if (randomEnco.id === 4) {
            popUp.innerHTML = `<p>Bad luck, you've sprung a trap!</p><button id="ohNo">Oh No!</button>`
            let ohNo = document.getElementById('ohNo');
            ohNo.addEventListener('click', () => {
                this.trap();
            })
        }
        if (this.roomNumber === 5 || this.roomNumber === 10 || this.roomNumber === 14) {
            popUp.innerHTML = `<p>The shop keep has wares, if you have the coin. Why not stay a while and peruse the trinkets and baubles?</p><button id="shop">Shop</button><button id="pass">Leave</button>`
            let shop = document.getElementById('shop')
            let pass = document.getElementById('pass')
            pass.addEventListener('click', () => {
                popUp.innerHTML = `<p>Not one for window shopping are we? Oh well a penny saved is a penny earned I suppose.<p><button id="nextBtn">Venture forth!</buton>`
                this.nextButton();
            })
            shop.addEventListener('click', () => {
                this.shopRoom();
            })
        }
        if (this.roomNumber === 15) {
            console.log('now');
            popUp.innerHTML = `<p>You've made it, now come, face me in battle!</p><button id="bossFight">Fight for your life!</button>`
            let bossFight = document.getElementById('bossFight');
            bossFight.addEventListener('click', () => {
                this.bossRoom();
            })
        }
    }
    // loadImg() {

    // }

    itemRoom() {
        console.log('Items!');
        let popUp = this.popUp;
        let hero = this.heroSc;
        let chars = this.chars;
        let items = this.items;
        console.log(items[0]);
        popUp.innerHTML = `
        <button id='gold'>The gold</button>
        <button id='sword'>${items[0].item}</button>
        <button id='shield'>${items[1].item}</button>`
        let gold = document.getElementById('gold')
        let sword = document.getElementById('sword')
        let shield = document.getElementById('shield');
        gold.addEventListener('click', () => {
            this.goldGen();
            hero.innerHTML = `<p>Name: ${chars[0].name}</p>
            <p>Hp: ${chars[0].Hp}</p>
            <p>Attack Damage: ${chars[0].Dp}</p>
            <p>Armor: ${chars[0].Ap}</p>
            <p>Gold: ${chars[0].gold}`
            popUp.innerHTML = `<p>A good choice, but will it really help you?</p><button id="nextBtn">Venture forth!</buton>`
            this.nextButton();
        })
        sword.addEventListener('click', () => {
            chars[0].Dp += items[0].Dp;
            hero.innerHTML = `<p>Name: ${chars[0].name}</p>
            <p>Hp: ${chars[0].Hp}</p>
            <p>Attack Damage: ${chars[0].Dp}</p>
            <p>Armor: ${chars[0].Ap}</p>
            <p>Gold: ${chars[0].gold}`
            popUp.innerHTML = `<p>A good choice, but will it really help you?</p><button id="nextBtn">Venture forth!</buton>`
            this.nextButton();
        })
        shield.addEventListener('click', () => {
            chars[0].Ap += items[1].Ap;
            hero.innerHTML = `<p>Name: ${chars[0].name}</p>
            <p>Hp: ${chars[0].Hp}</p>
            <p>Attack Damage: ${chars[0].Dp}</p>
            <p>Armor: ${chars[0].Ap}</p>
            <p>Gold: ${chars[0].gold}`
            popUp.innerHTML = `<p>A good choice, but will it really help you?</p><button id="nextBtn">Venture forth!</buton>`
            this.nextButton();
        })
        // let item = document.querySelectorAll('button');
        // console.log(item);
        // item.forEach(item =>
        //     item.addEventListener('click', () => {
        //         console.log('click');
        //         popUp.innerHTML = `<p>A good choice, but will it really help you?</p><button id="nextBtn">Venture forth!</buton>`
        //         this.nextButton();

        // })
        //     )
    }
    goldGen(){
        let chars = this.chars;
        chars[0].gold += Math.ceil(Math.random() * 25);
    }
    fightRoom() {
        // console.log('fight');
        // let encounters = this.encounters;
        // let popUp = this.popUp;
        // console.log(popUp);

        // popUp.innerHTML = `<p>A(n) ${ranMon.name} stands in your way!</p>
        // ${encounters[1].actions[0]}${encounters[1].actions[1]}`
        // let attack = document.getElementById('attack');
        // attack.addEventListener('click', ()=>{
        //     console.log('click');
        // })
        this.ranMonGen();
        let fightMon = this.fightMon;
        let gameDisplay = this.gameDisplay;
        var ctx = gameDisplay.getContext('2d');
        let fightMonImg = document.createElement('img')
        fightMonImg.src = fightMon.img;
        ctx.drawImage(fightMonImg, 0, 0, 450, 450)
        this.combat();
        // popUp.innerHTML = `<p>The beast is dead! Your way forwords is clear</p><button id="nextBtn">Venture forth!</buton>`
        // this.nextButton();

    }
    healRoom() {
        let popUp = this.popUp;
        let chars = this.chars;
        if (chars[0].Hp < 100) {
            chars[0].Hp += 5;
            if (chars[0].Hp > 100) {
                chars[0].Hp = 100
            }
            this.heroSc.innerHTML = `<p>Name: ${chars[0].name}</p>
            <p>Hp: ${chars[0].Hp}</p>
            <p>Attack Damage: ${chars[0].Dp}</p>
            <p>Armor: ${chars[0].Ap}</p>
            <p>Gold: ${chars[0].gold}</p>`
            popUp.innerHTML = `<p>Feeling refreshed? Good, no time to waste.</p><button id="nextBtn">Venture forth!</buton>`
        } else if (chars[0].Hp = 100) {
            popUp.innerHTML = `<p>Feeling greedy are we? Well cant blame you for trying.</p><button id="nextBtn">Venture forth!</buton>`
        }
        this.nextButton();
    }
    trap() {
        let popUp = this.popUp;
        let chars = this.chars;
        chars[0].Hp -= 5;
        if(chars[0].Hp <= 0){
            gameOver = true;
            this.gameOverFun();
        }
        popUp.innerHTML = `<p>Ouch! That looks painfull</p><button id="nextBtn">Venture forth!</buton>`
        this.heroSc.innerHTML = `<p>Name: ${chars[0].name}</p>
        <p>Hp: ${chars[0].Hp}</p>
        <p>Attack Damage: ${chars[0].Dp}</p>
        <p>Armor: ${chars[0].Ap}</p>
        <p>Gold: ${chars[0].gold}</p>`
        this.nextButton();
    }
    shopRoom() {
        let popUp = this.popUp;
        let chars = this.chars;
        let shopItems = this.shopItems;
        console.log(chars[0].gold);
        popUp.innerHTML = `<p>The shopkeep eyes you, "Welcome to my store! come take a look!"</p>
        <button id="ax">${shopItems[0].item}:${shopItems[0].cost}</button><button id="tower">${shopItems[1].item}:${shopItems[1].cost}</button><button id="health">${shopItems[2].item}:${shopItems[2].cost}</button>
        <p>Or you can leave. Nothings keeps you here</p><button id="pass">Leave</button>`
        let pass = document.getElementById('pass')
        let ax = document.getElementById('ax')
        let tower = document.getElementById('tower')
        let health = document.getElementById('health')
        pass.addEventListener('click', () => {
            popUp.innerHTML = `<p> Well, time to go then, hope you got what you were looking for.</p><button id="nextBtn">Venture forth!</buton>`
            this.nextButton();
        })
        ax.addEventListener('click', () => {
            if (chars[0].gold >= shopItems[0].cost) {
                ax.style.display = 'none',
                    chars[0].Dp += shopItems[0].Dp;
                chars[0].gold -= shopItems[0].cost;
                this.heroSc.innerHTML = `<p>Name: ${chars[0].name}</p>
        <p>Hp: ${chars[0].Hp}</p>
        <p>Attack Damage: ${chars[0].Dp}</p>
        <p>Armor: ${chars[0].Ap}</p>
        <p>Gold: ${chars[0].gold}</p>`
            } else {
                popUp.innerHTML = `<p>You must pay for that, no gold, no item</p><button id="back">sorry</button`
                let back = document.getElementById('back')
                back.addEventListener('click', () => {
                    this.shopRoom();
                })
            }
        })
        tower.addEventListener('click', () => {
            if (chars[0].gold >= shopItems[1].cost) {
                tower.style.display = 'none',
                chars[0].Ap += shopItems[1].Ap;
                chars[0].gold -= shopItems[1].cost
                this.heroSc.innerHTML = `<p>Name: ${chars[0].name}</p>
        <p>Hp: ${chars[0].Hp}</p>
        <p>Attack Damage: ${chars[0].Dp}</p>
        <p>Armor: ${chars[0].Ap}</p>
        <p>Gold: ${chars[0].gold}</p>`
            } else {
                popUp.innerHTML = `<p>You must pay for that, no gold, no item</p><button id="back">sorry</button`
                let back = document.getElementById('back')
                back.addEventListener('click',()=>{
                    this.shopRoom();
                })
            }
        })
        health.addEventListener('click', () => {
            if(chars[0].gold >= shopItems[2].cost){
            health.style.display = 'none'
            if (chars[0].Hp < 100) {
                chars[0].Hp += shopItems[2].Hp;
                if (chars[0].Hp > 100) {
                    chars[0].Hp = 100
                }
            }
            this.heroSc.innerHTML = `<p>Name: ${chars[0].name}</p>
        <p>Hp: ${chars[0].Hp}</p>
        <p>Attack Damage: ${chars[0].Dp}</p>
        <p>Armor: ${chars[0].Ap}</p>
        <p>Gold: ${chars[0].gold}</p>`
            } else {
                popUp.innerHTML = `<p>You must pay for that, no gold, no item</p><button id="back">sorry</button`
                let back = document.getElementById('back')
                back.addEventListener('click',()=>{
                    this.shopRoom();
                })
            }
        })
        if (ax.style.display == 'none' && tower.style.display == 'none' && health.style.display == 'none') {
            popUp.innerHTML = `<p>You have bought all you can, the shopkeep is pleased. It is time to move on.</p></p><button id="nextBtn">Venture forth!</buton>`
            this.nextButton();
        }
        
    }
    bossRoom() {
        let chars = this.chars;
        let turn = this.turn;
        let boss = this.boss;
        boss.name = chars[1].name;
        boss.Hp = chars[1].Hp;
        boss.Dp = chars[1].Dp;
        boss.Ap = chars[1].Ap;
        boss.gold = chars[1].gold;
        boss.img = chars[1].img
        this.boss = boss;
        turn = true;
        this.turn = turn;
        let popUp = this.popUp;
        let encounters = this.encounters;
        let econSc = this.econSc;
        econSc.innerHTML = `
        <p>Room: ${this.roomNumber}</p>
        <p>Monster: ${chars[1].name}</p>
        <p>Monster Health: ${chars[1].Hp}</p>
        <p>Fool! You dear challenge me?</p>
        <p>Worth: I am priceless you fool!</p>`
        let gameDisplay = this.gameDisplay;
        var ctx = gameDisplay.getContext('2d');
        let bossImg = document.createElement('img')
        bossImg.src = boss.img;
        ctx.drawImage(bossImg, 0, 0, 450, 450)
        this.bossRTurnOrder();
        // popUp.innerHTML = `<p>The dungeon king stands in your way!</p>${encounters[1].actions[0]}${encounters[1].actions[1]}`
        // let attack = document.getElementById('attack');
        // attack.addEventListener('click', () => {
        //     console.log('click');
        //     popUp.innerHTML = `<p>You Have WON!</p><button id="nextDungeon">Next Dungeon!</buton>`;
        //     let nextDungeon = document.getElementById('nextDungeon');
        //     nextDungeon.addEventListener('click', () => {
        //         this.reset();
        //     });
        // })
    }
    bossRTurnOrder(){
        let boss = this.boss
        let turn = this.turn;
        let gameOver = this.gameOver;
        let gameOverText = this.gameOverText;
        let popUp = this.popUp
        if (!gameOver) {
            if(boss.Hp != 0){
                if (turn) {
                    this.bossRHeroTurn();
                }
                if (turn == false) {
                    console.log('monster turn');
                    this.bossTurn();
                }
            }
        } else if (gameOver) {
            let popUp = this.popUp;
            popUp.innerHTML = gameOverText;
            let reset = document.getElementById('reset');
            reset.addEventListener('click', () => {
                this.init();
            })
        }
        if(boss.Hp <= 0){
            popUp.innerHTML = `<p>The dungeon King lay dead at your feet. You have one, but for what? Wealth? Glory?</p><button id="nextDungeon">again?</button>`
            let nextDungeon = document.getElementById('nextDungeon');
            nextDungeon.addEventListener('click', ()=>{
                console.log('click');
                this.roomNumber = 0;
                this.init();
                this.dungeonNumber += 1;

            })
        }
    }
    bossTurn(){
        let chars = this.chars;
        let boss = this.boss;
        let popUp = this.popUp;
        let hero = this.heroSc;
        let turn = this.turn;
        if(boss.Dp > chars[0].Ap){
            popUp.innerHTML = `<p>The King strikes at you, dealing ${boss.Dp - chars[0].Ap} damage!</p><button id="conue">Ouch!</button>`
            chars[0].Hp = chars[0].Hp - (boss.Dp - chars[0].Ap);
            if(chars[0].Hp <= 0){
                this.gameOver = true;
                this.gameOverFun();
            }
            let conue = document.getElementById('conue')
            conue.addEventListener('click', () => {
                console.log('ture')
                console.log(boss.Dp)
                console.log(chars[0].Hp)
                turn = true;
                this.turn = turn;
                this.bossRTurnOrder();
            }) // end conue event
        } else if (boss.Dp <= chars[0].Ap){
            popUp.innerHTML = `<p>Your armor is strong! But mine is stronger</P><button id="conue">Nice!</button>`
            let conue = document.getElementById('conue')
            conue.addEventListener('click', () => {
                console.log('ture')
                console.log(boss.Dp)
                console.log(chars[0].Hp)
                turn = true;
                this.turn = turn;
                this.bossRTurnOrder();
            }) // end conue event
        }
        hero.innerHTML = `<p>Name: ${chars[0].name}</p>
            <p>Hp: ${chars[0].Hp}</p>
            <p>Attack Damage: ${chars[0].Dp}</p>
            <p>Armor: ${chars[0].Ap}</p>
            <p>Gold: ${chars[0].gold}`;
        console.log('Conue is', conue)
    }
    ranMonGen(){
        let monsters = this.monsters
        let monIndx = Math.floor(Math.random() * monsters.length)
        let ranMon = this.monsters[monIndx]
        let fightMon = this.fightMon;
        fightMon.name = ranMon.name;
        fightMon.img = ranMon.img;
        fightMon.Dp = ranMon.Dp;
        fightMon.Hp = ranMon.Hp;
        fightMon.gold = ranMon.gold;
        fightMon.Ap = ranMon.Ap;
        this.fightMon = fightMon
        console.log(this.fightMon)
    }
    combat() {
        console.log('combat begins')
        // let fightMon = this.fightMon;
        // console.log(fightMon);
        let encounters = this.encounters;
        let econSc = this.econSc;
        let fightMon = this.fightMon;
        let gameOverText = this.gameOverText
        let chars = this.chars;
        let popUp = this.popUp;
        let hero = this.heroSc;
        let turn = this.turn;
        turn = true;
        this.turn = turn;
        console.log(fightMon);
        econSc.innerHTML = `
        <p>Room: ${this.roomNumber}</p>
        <p>Monster: ${fightMon.name}</p>
        <p>Monster Health: ${fightMon.Hp}</p>
        <p>Monster Worth: ${fightMon.gold}</p>`
        this.turnOrder();
    }//end combat fun


    turnOrder() {
        let hero = this.heroSc;
        let chars = this.chars;
        let turn = this.turn;
        let gameOver = this.gameOver;
        let gameOverText = this.gameOverText;
        let popUp = this.popUp;
        let fightMon = this.fightMon;
        if (!gameOver) {
            if(fightMon.Hp != 0){
                if (turn) {
                    this.heroTurn();
                }
                if (turn == false) {
                    console.log('monster turn');
                    this.MonTurn();
                }
            }
        } else if (gameOver) {
            let popUp = this.popUp;
            popUp.innerHTML = gameOverText;
            let reset = document.getElementById('reset');
            reset.addEventListener('click', () => {
                this.init();
            })
        }
        if (fightMon.Hp <= 0) {
            chars[0].gold += fightMon.gold;
            hero.innerHTML = `<p>Name: ${chars[0].name}</p>
            <p>Hp: ${chars[0].Hp}</p>
            <p>Attack Damage: ${chars[0].Dp}</p>
            <p>Armor: ${chars[0].Ap}</p>
            <p>Gold: ${chars[0].gold}`
            popUp.innerHTML = `<p>The beast is dead! Your way forwords is clear</p><button id="nextBtn">Venture forth!</buton>`
            this.nextButton();
        }
    }
    bossRHeroTurn(){
        let econSc = this.econSc
        let chars = this.chars;
        let popUp = this.popUp;
        let boss = this.boss;
        let encounters = this.encounters;
        let turn = this.turn
        popUp.innerHTML = `
        <p>The Dungeon King stands in your way!</p>
        ${encounters[1].actions[0]}${encounters[1].actions[1]}`

        attack.addEventListener('click', () => {
            console.log(turn);
            popUp.innerHTML = `
            <p>You strike at the Dungeon King dealing ${chars[0].Dp - boss.Ap} damage</p>
            <button id="conue">Nice</button>`
            boss.Hp -= (chars[0].Dp - boss.Ap);
            let conue = document.getElementById('conue')
            console.log('Conue is', conue)
            econSc.innerHTML = `
        <p>Room: ${this.roomNumber}</p>
        <p>Dungeon: ${this.dungeonNumber}</p>
        <p>You fight the King!</p>
        <p>Monster Health: ${boss.Hp}</p>
        <p>Fool! You dear challenge me?</p>`
            conue.addEventListener('click', () => {
                console.log(turn)
                turn = false;
                this.turn = turn;
                console.log('this.turn:', this.turn)
                    this.bossRTurnOrder();
            })
        }) //end attack event
        block.addEventListener('click', () => {

        })
        block.addEventListener('click', ()=>{
            popUp.innerHTML =  `<p>You choose to sit there and take the hit.<p><button id="conue">...</button>`
            conue.addEventListener('click', () => {
                console.log(turn)
                turn = false;
                this.turn = turn;
                console.log('this.turn:', this.turn)
                this.bossRTurnOrder();
            })
        })
    }
    heroTurn() {
        let econSc = this.econSc
        let chars = this.chars;
        let popUp = this.popUp;
        let fightMon = this.fightMon;
        let encounters = this.encounters;
        let turn = this.turn
        console.log(fightMon);
        popUp.innerHTML = `
        <p>A(n) ${fightMon.name} stands in your way!</p>
        ${encounters[1].actions[0]}${encounters[1].actions[1]}`

        attack.addEventListener('click', () => {
            console.log(turn);
            popUp.innerHTML = `
            <p>You strike at the ${fightMon.name} dealing ${chars[0].Dp} damage</p>
            <button id="conue">Nice</button>`
            fightMon.Hp -= chars[0].Dp;
            let conue = document.getElementById('conue')
            console.log('Conue is', conue)
            econSc.innerHTML = `
        <p>Room: ${this.roomNumber}</p>
        <p>Dungeon: ${this.dungeonNumber}</p>
        <p>Monster: ${fightMon.name}</p>
        <p>Monster Health: ${fightMon.Hp}</p>
        <p>Monster Worth: ${fightMon.gold}</p>`
            conue.addEventListener('click', () => {
                console.log(turn)
                turn = false;
                this.turn = turn;
                console.log('this.turn:', this.turn)
                    this.turnOrder();
            })
        }) //end attack event
        block.addEventListener('click', () => {

        })
        block.addEventListener('click', ()=>{
            popUp.innerHTML =  `<p>You choose to sit there and take the hit.<p><button id="conue">...</button>`
            conue.addEventListener('click', () => {
                console.log(turn)
                turn = false;
                this.turn = turn;
                console.log('this.turn:', this.turn)
                this.turnOrder();
            })
        })
    } //end heroTurn
    MonTurn() {

        let chars = this.chars;
        let hero = this.heroSc;
        let turn = this.turn;
        let popUp = this.popUp;
        let fightMon = this.fightMon;
        let gameOver = this.gameOver;
        console.log(fightMon);
        if(fightMon.Dp > chars[0].Ap){
            popUp.innerHTML = `<p>The ${fightMon.name} has struck you, dealing ${fightMon.Dp - chars[0].Ap}.</p><button id="conue">Ouch!</button>`
            chars[0].Hp = chars[0].Hp - (fightMon.Dp - chars[0].Ap);
            if(chars[0].Hp <= 0){
                this.gameOver = true;
                this.gameOverFun();
            }
            let conue = document.getElementById('conue')
            conue.addEventListener('click', () => {
                console.log('ture')
                console.log(fightMon.Dp)
                console.log(chars[0].Hp)
                turn = true;
                this.turn = turn;
                this.turnOrder();
            }) // end conue event
        } else if (fightMon.Dp <= chars[0].Ap){
            popUp.innerHTML = `<p>Your armor is strong, to strong for the beast!</P><button id="conue">Nice!</button>`
            let conue = document.getElementById('conue')
            conue.addEventListener('click', () => {
                console.log('ture')
                console.log(fightMon.Dp)
                console.log(chars[0].Hp)
                turn = true;
                this.turn = turn;
                this.turnOrder();
            }) // end conue event
        }
        hero.innerHTML = `<p>Name: ${chars[0].name}</p>
            <p>Hp: ${chars[0].Hp}</p>
            <p>Attack Damage: ${chars[0].Dp}</p>
            <p>Armor: ${chars[0].Ap}</p>
            <p>Gold: ${chars[0].gold}`;
        console.log('Conue is', conue)
        // conue.addEventListener('click', () => {
        //     console.log('ture')
        //     console.log(fightMon.Dp)
        //     console.log(chars[0].Hp)
        //     turn = true;
        //     this.turn = turn;
        //     this.turnOrder();
        // }) // end conue event
    } //end MonTurn
    gameOverFun(){
        let popUp = this.Popup
        if (this.gameOver == true){
            popUp.innerHTML = `${this.gameOverText}`
        }
    }
} // end Game



// }
// nextRoom(){
//     if(hero.Hp !== 0 && encounter == false){
//         popUp.innerHTml = `<p>`
//     }
// }
// buildencounter(){
//     if(randomeEncounter.id == encounters[0].id){

//     }
// }
// }
const gameStart = new Game();
// console.log(chars);
// console.log(gameStart);
const start = document.getElementById('startBtn')
start.addEventListener('click', () => {
    gameStart.init();
    start.style.display = 'none';
}
)


// let ftft = Math.random() < 0.5


// let randomNumber = Math.ceil(Math.random() * 25);
// console.log(randomNumber);
// console.log(randomNumber);
// console.log(randomNumber);

// ctx.font = '48px serif';
//     ctx.fillStyle = 'blue';
//     ctx.fillText('Win', 175, 250);
