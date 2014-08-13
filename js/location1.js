$(document).ready(function(){
    /* 1번째 별 */
    var str = "<table>";
    for(i=0;i<5; i++){
        str += "<tr>";
            for(j=0;j<5-i;j++)
                str += "<td>*</td>";
            str +="</tr>";
        }
    str +="</table>";
    $('#STAR1').html(str);

    /* 2번째 별 */
    str = "<table>";
    for(i=0; i<5; i++){
        str += "<tr>";
            for(j=5; j>=5-i; j--)
                str += "<td>*</td>";
            str += "</tr>";
        }
    str += "</table>";
    $('#STAR2').html(str);

    /* 3번째 별 */
    str = "<table>";
    for(i=0; i<5; i++){
        str += "<tr>";
            for(j=5; j>5-i; j--)
                str += "<td> </td>";
                for(j=0; j<5-i; j++)
                    str += "<td>*</td>";
                str += "</tr>";
        }
    str += "</table>";
    $('#STAR3').html(str);

    /*4번째 별 */
    str = "<table>";
    for(i=0; i<5; i++){
        str += "<tr>";
            for(j=0; j<4-i; j++)
                str += "<td> </td>";
                for(j=5; j>=5-i; j--)
                    str += "<td>*</td>";
                str += "</tr>";
        }
    str += "</table>";
    $('#STAR4').html(str);
});