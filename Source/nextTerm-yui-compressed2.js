/*
---
description: This method finds the next number in the sequence of integers using difference table.

authors:
- Adrian Statescu (http://thinkphp.ro)

license:
- MIT-style license

requires:
 core/1.3.1: '*'

provides: Array.nextTerm

...
*/

Array.implement({nextTerm:function(){var last=[],arr=this,diff=arr.slice(0),n=arr.length-1;for(var k=0;k<n;++k){var same=1;for(var j=0;j<diff.length-k-1;++j){diff[j]=diff[j+1]-diff[j];if(j>0&&diff[j]!=diff[j-1]){same=0}}last.push(diff[j]);if(same){if(k<arr.length-2){var out=diff[0];for(var s=last.length-1;s>-1;s--){out+=last[s]}return out}else{return false}break}}}});


