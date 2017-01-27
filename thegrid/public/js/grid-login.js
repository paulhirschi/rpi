(function() {
  'use strict';

  var module = angular.module('theGrid');

  function controller() {
    var model = this
    var board,
      game = new Chess();

    // do not pick up pieces if the game is over
    // only pick up pieces for White
    var onDragStart = function(source, piece, position, orientation) {
      if (game.in_checkmate() === true || game.in_draw() === true ||
        piece.search(/^b/) !== -1) {
        return false;
      }
    };

    var makeRandomMove = function() {
      var possibleMoves = game.moves();

      // game over
      if (possibleMoves.length === 0) return;

      var randomIndex = Math.floor(Math.random() * possibleMoves.length);
      game.move(possibleMoves[randomIndex]);
      board.position(game.fen());
    };

    var onDrop = function(source, target) {
      // see if the move is legal
      var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
      });

      // illegal move
      if (move === null) return 'snapback';

      // make random legal move for black
      window.setTimeout(makeRandomMove, 250);
    };

    // update the board position after the piece snap
    // for castling, en passant, pawn promotion
    var onSnapEnd = function() {
      board.position(game.fen());
    };

    var cfg = {
      showNotation: false,
      draggable: true,
      position: 'start',
      onDragStart: onDragStart,
      onDrop: onDrop,
      onSnapEnd: onSnapEnd,
      pieceTheme: 'img/chesspieces/tron/{piece}.svg'
    };
    board = ChessBoard('board', cfg);
    $(window).resize(board.resize);
  }

  module.component('gridLogin', {
    templateUrl: 'js/grid-login.html',
    bindings: {
      value: '<', // < means input, = means 2-way, @ mean attribute, & means function binding
      max: '<',
      setRating: '&'
    },
    // transclude: true,
    controllerAs: 'model',
    controller: controller
  });
}());
