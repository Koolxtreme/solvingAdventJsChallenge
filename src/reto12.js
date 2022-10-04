export default function getMinJump(obstacles) {
    // ¡No olvides compartir tu solución en redes!
    if(!Array.isArray(obstacles)) throw new Error("Parameter must be an array");

    let jumper = 1;

    const solver = (arr)=>
    {
        arr.forEach((number)=>
        {
            if(number % jumper === 0)
            {
                jumper ++;
                solver(arr)
            }
        })
    }
    solver(obstacles);

    return jumper
}