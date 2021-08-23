const playername = (name) => {
    return { name }
}

var name1 = prompt("enter player 1 name", " ");
var name2 = prompt("enter player 2 name", " ")

const player1 = playername(name1);
const player2 = playername(name2);
var t = 0;
game = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];



const first = document.querySelector('.s1')
first.addEventListener('click', () => {
    if (first.innerHTML !== 'x' & first.innerHTML !== 'o') {
        first.append(game[t]);
        t++;
    }
    if (first.innerHTML == 'x') {
        if (first.innerHTML == 'x' & fourth.innerHTML == 'x' & seventh.innerHTML == 'x') {
           dsp.append(player1.name +" "+ "wins the game")
        }

        if (first.innerHTML == 'x' & scnd.innerHTML == 'x' & third.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (first.innerHTML == 'x' & fifth.innerHTML == 'x' & ninth.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }
    }

    if (first.innerHTML == 'o') {
        if (first.innerHTML == 'o' & fourth.innerHTML == 'o' & seventh.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (first.innerHTML == 'o' & scnd.innerHTML == 'o' & third.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (first.innerHTML == 'o' & fifth.innerHTML == 'o' & ninth.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }
    }
})

const scnd = document.querySelector('.s2')
scnd.addEventListener('click', () => {
    if (scnd.innerHTML !== 'x' & scnd.innerHTML !== 'o') {
        scnd.append(game[t])
        t++;
    }

    if (scnd.innerHTML == 'x') {
        if (scnd.innerHTML == 'x' & first.innerHTML == 'x' & third.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (scnd.innerHTML == 'x' & fifth.innerHTML == 'x' & eight.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }


    }

    if (scnd.innerHTML == 'o') {
        if (scnd.innerHTML == 'o' & first.innerHTML == 'o' & third.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (scnd.innerHTML == 'o' & fifth.innerHTML == 'o' & eight.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }


    }
})

const third = document.querySelector('.s3')
third.addEventListener('click', () => {
    if (third.innerHTML !== 'x' & third.innerHTML !== 'o') {
        third.append(game[t]);
        t++;
    }
    if (third.innerHTML == 'x') {
        if (first.innerHTML == 'x' & scnd.innerHTML == 'x' & third.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (third.innerHTML == 'x' & sixth.innerHTML == 'x' & ninth.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (third.innerHTML == 'x' & fifth.innerHTML == 'x' & seventh.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }
    }

    if (third.innerHTML == 'o') {
        if (first.innerHTML == 'o' & scnd.innerHTML == 'o' & third.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (third.innerHTML == 'o' & sixth.innerHTML == 'o' & ninth.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (third.innerHTML == 'o' & fifth.innerHTML == 'o' & seventh.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }
    }



})

const fourth = document.querySelector('.s4')
fourth.addEventListener('click', () => {
    if (fourth.innerHTML !== 'x' & fourth.innerHTML !== 'o') {
        fourth.append(game[t]);
        t++;
    }

    if (fourth.innerHTML == 'x') {
        if (fourth.innerHTML == 'x' & first.innerHTML == 'x' & seventh.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (fourth.innerHTML == 'x' & fifth.innerHTML == 'x' & sixth.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }


    }

    if (fourth.innerHTML == 'o') {
        if (fourth.innerHTML == 'o' & first.innerHTML == 'o' & seventh.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (fourth.innerHTML == 'o' & fifth.innerHTML == 'o' & sixth.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }


    }
})

const fifth = document.querySelector('.s5')
fifth.addEventListener('click', () => {
    if (fifth.innerHTML !== 'x' & fifth.innerHTML !== 'o') {
        fifth.append(game[t]);
        t++;
    }


    if (fifth.innerHTML == 'x') {
        if (scnd.innerHTML == 'x' & fifth.innerHTML == 'x' & eight.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (fifth.innerHTML == 'x' & third.innerHTML == 'x' & seventh.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (fourth.innerHTML == 'x' & fifth.innerHTML == 'x' & sixth.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }
    }

    if (fifth.innerHTML == 'o') {
        if (scnd.innerHTML == 'o' & fifth.innerHTML == 'o' & eight.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (fifth.innerHTML == 'o' & third.innerHTML == 'o' & seventh.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (fourth.innerHTML == 'o' & fifth.innerHTML == 'o' & sixth.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }
    }
})

const sixth = document.querySelector('.s6')
sixth.addEventListener('click', () => {
    if (sixth.innerHTML !== 'x' & sixth.innerHTML !== 'o') {
        sixth.append(game[t]);
        t++;
    }


    if (sixth.innerHTML == 'x') {
        if (third.innerHTML == 'x' & sixth.innerHTML == 'x' & ninth.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (fourth.innerHTML == 'x' & fifth.innerHTML == 'x' & sixth.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }


    }

    if (sixth.innerHTML == 'o') {
        if (third.innerHTML == 'o' & sixth.innerHTML == 'o' & ninth.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (fourth.innerHTML == 'o' & fifth.innerHTML == 'o' & sixth.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }


    }
})

const seventh = document.querySelector('.s7')
seventh.addEventListener('click', () => {
    if (seventh.innerHTML !== 'x' & seventh.innerHTML !== 'o') {
        seventh.append(game[t]);
        t++;
    }


    if (seventh.innerHTML == 'x') {
        if (seventh.innerHTML == 'x' & fifth.innerHTML == 'x' & third.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (first.innerHTML == 'x' & fourth.innerHTML == 'x' & seventh.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (seventh.innerHTML == 'x' & eight.innerHTML == 'x' & ninth.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }
    }

    if (seventh.innerHTML == 'o') {
        if (seventh.innerHTML == 'o' & fifth.innerHTML == 'o' & third.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (first.innerHTML == 'o' & fourth.innerHTML == 'o' & seventh.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (seventh.innerHTML == 'o' & eight.innerHTML == 'o' & ninth.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }
    }
})

const eight = document.querySelector('.s8')
eight.addEventListener('click', () => {
    if (eight.innerHTML !== 'x' & eight.innerHTML !== 'o') {
        eight.append(game[t]);
        t++;
    }


    if (eight.innerHTML == 'x') {
        if (seventh.innerHTML == 'x' & eight.innerHTML == 'x' & ninth.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (scnd.innerHTML == 'x' & fifth.innerHTML == 'x' & eight.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }


    }

    if (eight.innerHTML == 'o') {
        if (seventh.innerHTML == 'o' & eight.innerHTML == 'o' & ninth.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (scnd.innerHTML == 'o' & fifth.innerHTML == 'o' & eight.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }


    }
})

const ninth = document.querySelector('.s9')
ninth.addEventListener('click', () => {
    if (ninth.innerHTML !== 'x' & ninth.innerHTML !== 'o') {
        ninth.append(game[t]);
        t++;
    }

    if (ninth.innerHTML == 'x') {
        if (third.innerHTML == 'x' & sixth.innerHTML == 'x' & ninth.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (first.innerHTML == 'x' & fifth.innerHTML == 'x' & ninth.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }

        if (seventh.innerHTML == 'x' & eight.innerHTML == 'x' & ninth.innerHTML == 'x') {
            dsp.append(player1.name +" "+ "wins the game")
        }
    }

    if (ninth.innerHTML == 'o') {
        if (third.innerHTML == 'o' & sixth.innerHTML == 'o' & ninth.innerHTML == 'o') {
           dsp.append(player2.name + " " +"wins the game")

        }

        if (first.innerHTML == 'o' & fifth.innerHTML == 'o' & ninth.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }

        if (seventh.innerHTML == 'o' & eight.innerHTML == 'o' & ninth.innerHTML == 'o') {
            dsp.append(player2.name + " " +"wins the game")
        }
    }
})

const dsp=document.querySelector('.dis')

