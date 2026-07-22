// function returning function
function outerfunction(){
    function innerfunction(){
        console.log("hello iqra");
    }
    return innerfunction;
}
const result = outerfunction();
result();