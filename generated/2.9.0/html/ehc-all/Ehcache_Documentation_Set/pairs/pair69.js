var pairs =
{
"transactions":{"write-behind":1}
,"write-behind":{"write-through":1,"supported":1}
,"write-through":{"caches":1,"approach":1,"non-xa":1}
,"caches":{"transaction-enabled":1}
,"transaction-enabled":{"cache":1}
,"cache":{"used":1,"operations":1}
,"used":{"writer":1,"transactional":1}
,"writer":{"write":1,"responsible":1}
,"write":{"operations":1}
,"operations":{"queued":1,"part":1,"executed":1,"cause":1}
,"queued":{"until":1}
,"until":{"transaction":1}
,"transaction":{"commit":1,"write-behind":1,"writer":1,"using":1,"succeed":1,"rolled":1}
,"commit":{"time":1}
,"time":{"solely":1}
,"solely":{"write-through":1}
,"approach":{"potential":1}
,"potential":{"xaresource":1}
,"xaresource":{"participate":1}
,"participate":{"transaction":1}
,"supported":{"however":1}
,"however":{"probably":1}
,"probably":{"used":1}
,"transactional":{"cache":1}
,"part":{"transaction":1}
,"responsible":{"obtaining":1}
,"obtaining":{"new":1}
,"new":{"transaction":1}
,"using":{"write-through":1}
,"non-xa":{"resource":1}
,"resource":{"work":1}
,"work":{"guarantee":1}
,"guarantee":{"transaction":1}
,"succeed":{"write":1}
,"executed":{"hand":1}
,"hand":{"exception":1}
,"exception":{"thrown":1}
,"thrown":{"during":1}
,"during":{"write":1}
,"cause":{"transaction":1}
,"rolled":{"back":1}
,"back":{"having":1}
,"having":{"usertransaction.commit":1}
,"usertransaction.commit":{"throw":1}
,"throw":{"rollbackexception":1}
}
;Search.control.loadWordPairs(pairs);
