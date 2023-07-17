const switcheroo = x => x.replace(/[ab]/gi, match => match === 'a' ? 'b' : 'a');

var switcherooo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")