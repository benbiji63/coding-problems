// repeating I with repeat method
function madShout(sidewalk){  
  return 'Oi' + 'i'.repeat((sidewalk.indexOf('F') - sidewalk.indexOf('Y') - 1) / 2) + ' F!';
}

const madShout=s=>"O"+'i'.repeat((s.match(/Y.*F/g)[0].length/2))+" F!"