var array=[];
var arr_size=0;
var fun_speed=0;
// generating array size
function array_size()
{
    arr_size=document.querySelector("#size").value;
}
//generating function speed
function func_speed()
{
    fun_speed=document.querySelector("#speed").value;
}
// generating an array
function generate_array()
{
    array=[];
    for(var i=0;i<arr_size;i++)
    {
        var random=Math.random()*100;
        var number=Math.floor(random)+1;
        array.push(number);
    }
    console.log(array);
}
// disableing buttons
function disableButtons()
{
    document.querySelector("#g_arr").disbaled=true;
    document.querySelector("#b_sort").disbaled=true;
    document.querySelector("#i_sort").disbaled=true;
    document.querySelector("#s_sort").disbaled=true;
    document.querySelector("#q_sort").disbaled=true;
    document.querySelector("#m_sort").disbaled=true;
    document.querySelector("#h_sort").disbaled=true;
}
// disableing range fields
function disableRangeFields()
{
    document.querySelector("#size").disbaled=true;
    document.querySelector("#speed").disbaled=true;
}
// disableing form
function disableForm()
{

}
//enableing buttons
function enableButtons()
{
    document.querySelector("#g_arr").disbaled=false;
    document.querySelector("#b_sort").disbaled=false;
    document.querySelector("#i_sort").disbaled=false;
    document.querySelector("#s_sort").disbaled=false;
    document.querySelector("#q_sort").disbaled=false;
    document.querySelector("#m_sort").disbaled=false;
    document.querySelector("#h_sort").disbaled=false;
}
// enable range fields
function enableRangeFields()
{
    document.querySelector("#size").disbaled=false;
    document.querySelector("#speed").disbaled=false;
}
// enableing form
function enableForm()
{

}
function main()
{
    var n;
    switch(n)
    {
        case 1:bubble();
        break;
        case 2:insertion();
        break;
        case 3:selection();
        break;
        case 4:quick();
        break;
        case 5:merge();
        break;
        case 6:heap();
        break;
    }
}