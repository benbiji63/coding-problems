// Answer with regex
function getFreeUrinals(urinals) {
  if ( urinals.includes("11") )
    return -1;
  else
    return ( urinals.match( /(^|0)0(?!1)/g ) || [] ).length;
}