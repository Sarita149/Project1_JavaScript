queen = {
    direction: "s",
    position: {
        x1: 4,
        y1: 4
    }
}
console.log("default position of queen :" + queen.position.x1, queen.position.y1);
function move(direction, steps) {
    var temp = 0;
    var temp1 = 0;
    switch (direction) {
        case "s":
            temp = queen.position.y1 + steps;
            if (temp < 8 && temp > 0) {
                queen.position.y1 = queen.position.y1 + steps;

            }
            else {
                console.log("out");
            }
            break;
        case "n":
            temp = queen.position.y1 - steps;
            if (temp < 8 && temp >= 0) {
                queen.position.y1 = queen.position.y1 - steps;
            }
            else {
                console.log("wrong");
            }
            break;
        case "e":
            temp = queen.position.x1 - steps;
            if (temp < 8 && temp >= 0) {
                queen.position.x1 = queen.position.x1 - steps;
            }
            else {
                console.log("wrong");
            }
            break;
        case "w":
            temp = queen.position.x1 + steps;
            if (temp < 8 && temp >= 0) {
                queen.position.x1 = queen.position.x1 + steps;
            }
            else {
                console.log("wrong");
            }
            break;
        case "sw":
            temp1 = queen.position.y1 + steps;
            temp = queen.position.x1 - steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.x1 = queen.position.x1 - steps;
                    queen.position.y1 = queen.position.y1 + steps;
                }
            }

            break;
        case "ne":
            temp1 = queen.position.y1 - steps;
            temp = queen.position.x1 + steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.x1 = queen.position.x1 + steps;
                    queen.position.y1 = queen.position.y1 - steps;
                }
            }

            break;
        case "nw":
            temp1 = queen.position.y1 - steps;
            temp = queen.position.x1 - steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.x1 = queen.position.x1 - steps;
                    queen.position.y1 = queen.position.y1 - steps;
                }
            }

            break;
        case "se":
            temp1 = queen.position.y1 + steps;
            temp = queen.position.x1 + steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.x1 = queen.position.x1 + steps;
                    queen.position.y1 = queen.position.y1 + steps;
                }
            }

            break;
    }
}
function changedirection(direction) {
    let dir = direction
    queen.direction = dir;
    return dir;
}
let south = changedirection("s");
move(south, 2)
console.log("updated position :" + "" + queen.position.x1, queen.position.y1);

let north = changedirection("n");
move(north, 2)
console.log("updated position :" + "" + queen.position.x1, queen.position.y1);

let east = changedirection("e");
move(east, 3)
console.log("updated position :" + "" + queen.position.x1, queen.position.y1);

let west = changedirection("w");
move(west, 3)
console.log("updated position :" + "" + queen.position.x1, queen.position.y1);

let southwest = changedirection("sw");
move(southwest, 2)
console.log("updated position :" + "" + queen.position.x1, queen.position.y1);

let northeast = changedirection("ne");
move(northeast, 2)
console.log("updated position :" + "" + queen.position.x1, queen.position.y1);

let northwest = changedirection("nw");
move(northwest, 3)
console.log("updated position :" + "" + queen.position.x1, queen.position.y1);

let southeast = changedirection("se");
move(southeast, 3)
console.log("updated position :" + "" + queen.position.x1, queen.position.y1);