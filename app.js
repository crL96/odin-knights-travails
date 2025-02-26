function possibleMoves(start) {
    const moves = [];

    if (start[0] + 2 <= 7 && start[1] + 1 <= 7) {
        moves.push([start[0] + 2, start[1] + 1]);
    }
    if (start[0] + 2 <= 7 && start[1] - 1 >= 0) {
        moves.push([start[0] + 2, start[1] - 1]);
    }
    if (start[0] + 1 <= 7 && start[1] + 2 <= 7) {
        moves.push([start[0] + 1, start[1] + 2]);
    }
    if (start[0] + 1 <= 7 && start[1] - 2 >= 0) {
        moves.push([start[0] + 1, start[1] - 2]);
    }
    if (start[0] - 2 >= 0 && start[1] + 1 <= 7) {
        moves.push([start[0] - 2, start[1] + 1]);
    }
    if (start[0] - 2 >= 0 && start[1] - 1 >= 0) {
        moves.push([start[0] - 2, start[1] - 1]);
    }
    if (start[0] - 1 >= 0 && start[1] - 2 >= 0) {
        moves.push([start[0] - 1, start[1] - 2]);
    }
    if (start[0] - 1 >= 0 && start[1] + 2 <= 7) {
        moves.push([start[0] - 1, start[1] + 2]);
    }
    return moves;  
}

// With Queue BFS
function knightMoves(start, end) {
    const queue = [[start]];
    const visited = [];

    while (queue.length > 0) {
        const currentPath = queue.shift();;
        const currentPos = currentPath[currentPath.length -1];
        visited.push(currentPos);

        if (currentPos[0] == end[0] && currentPos[1] == end[1]) {
            return `You made it in ${currentPath.length - 1} steps! Here's your path : ${JSON.stringify(currentPath)}`;
        }

        const moves = possibleMoves(currentPos);
        const visitedString = visited.join(" - ");
        for (let move of moves) {
            if (!(visitedString.includes(move))) {
                queue.push([...currentPath, move]);
            };
        }
    }
}

console.log(knightMovesN([0, 0], [7, 7]));
console.log(knightMoves([0, 0], [7, 7]));


//WORKING BFS QUEUE - NUMBER OF STEPS ONLY
function knightMovesN(start, end) {
    let moveCounter = 0;
    const queue = [start];
    const path = [start];

    // New level indicator
    queue.push("new level");
    //Queue all possible moves, except already visited positions
    while (queue.length > 0) {
        const currentPos = queue.shift();
        path.push(currentPos);

        if (currentPos[0] == end[0] && currentPos[1] == end[1]) return moveCounter;

        const moves = possibleMoves(currentPos);
        for (let move of moves) {
            queue.push(move);
        }
        // When we reach a new level
        if (queue[0] == "new level") {
            queue.shift();
            moveCounter++
            queue.push("new level");
        }
    }
}