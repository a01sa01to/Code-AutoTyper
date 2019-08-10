var lang;
let jsonData;
let auto=false;
let interval=50;
let si;
let ext=new String;

function indexNum(lang,jsonData){
    for(let i=0;i<jsonData.length;i++){if(jsonData[i].lang === lang) return i;}
}
function input(){
    switch(lang.code[lang.char_count]){
        case "\n":
            lang.br_count++;
            $("#line").html($("#line").html()+"<br><i class=\"num\">"+lang.br_count+"</i>");
            $("#out").html($("#out").html()+"<br>");
            break;
        case "\t":
            $("#out").html($("#out").html()+"<i></i>&nbsp;&nbsp;&nbsp;&nbsp;");
            break;
        case " ":
            $("#out").html($("#out").html()+"&nbsp;");
            break;
        case undefined:
            break;
        default:
            $("#out").html($("#out").html()+lang.code[lang.char_count]);
            break;
    }
    lang.char_count++;
}
function react(){
    $("#out").html("");
    $("#line").html("<i class=\"num\">1</i><br><i class=\"num\">2</i>");
    $("#out").html(lang.comment+"<br>");
    var to=lang.char_count;
    lang.char_count=0;
    lang.br_count=2;
    while(lang.char_count<to){
        input()
    }
}

window.addEventListener('load',async ()=>{
    await fetch("./Comments.json").then(r=>r.text()).then(t=>JSON.parse(t)).then(data=>{
        window.getComment = ext=>(data[ext])?data[ext][0]+' Input Something Here! '+data[ext][1]:'// Error! Please Add Comment Presets to Comments.json!';
    })

    await fetch("./Codes/files.json").then(r=>r.text()).then(t=>JSON.parse(t)).then(async j=>{
        jsonData = j;
        for(e of j){
            $('select#extension').append(`<option value=${e.lang}>${e.lang}</option>`);
        }

        window.lang = jsonData[0];
        window.lang.br_count = 2;
        window.lang.char_count = 0;
        window.lang.comment = await getComment(lang.ext);
        $("i#ext").text(lang.ext);
        await fetch(`Codes/${window.lang.file}`).then(r=>r.text()).then(t=>lang.code=t).then(()=>react());
        react();
    });
    $("body").keyup(input);
    $("select#extension").change(async function(){ //File Extension
        const num = indexNum($("select#extension").val(), jsonData);
        window.lang = jsonData[num];
        window.lang.br_count = 2;
        window.lang.char_count = 0;
        window.lang.comment = await getComment(lang.ext);
        $("i#ext").text(lang.ext);
        fetch("./Codes/"+lang.file).then(r=>r.text()).then(t=>lang.code=t).then(()=>react());
    });
    $("input#auto").change(function(){ //Auto Input
        $("body").keyup();
        clearInterval(si);
        if($(this).val()==="on"){
            auto=true;
            $("#auto_interval").removeAttr("disabled");
            si=setInterval(input,interval);
        }
        else{
            auto=false;
            $("#auto_interval").attr("disabled","disabled");
            $("body").keyup(input);
        }
    });
    $("input#auto_interval").change(function(){ //Interval
        if($(this).val()>0||$(this).val()!==null){
            interval=$(this).val();
        }
        clearInterval(si);
        si=setInterval(input,interval);
    });
})
