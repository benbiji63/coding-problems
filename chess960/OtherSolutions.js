const BISHOP = 'B';
const KING = 'K';
const ROOK = 'R';

const checkBishopRule = position => (position.indexOf(BISHOP) + position.lastIndexOf(BISHOP)) % 2 === 1;

const checkRookRule = position => position.indexOf(ROOK) < position.indexOf(KING)
  && position.indexOf(KING) < position.lastIndexOf(ROOK);

const isValidChess960 = position => checkBishopRule(position) && checkRookRule(position);

function isValidChess960 (pieces) {
	return /^(?=.*R.*K.*R)(?=.*B(?:..)*B)(?=.*Q)(?=.*N.*N)[RNBQK]{8}$/.test(pieces);
}