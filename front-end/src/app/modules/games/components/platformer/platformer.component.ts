import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-platformer',
  templateUrl: './platformer.component.html',
  styleUrls: ['./platformer.component.scss']
})
export class PlatformerComponent implements OnInit {
  isGameStarted = false;
  isJumping = false;
  score = 0;
  highScore = 0;
  obstacleSpeed = 1;
  frameCount = 0;
  gameLoopId: number | null = null;

  character = {
    color: 'blue',
    position: {
      x: 120,
      y: 20
    },
    size: {
      width: 12,
      height: 12
    },
    jumpHeight: 45,
    jumpDuration: 450,
  }

  obstacles = [
    {
      position: {
        x: 400,
        y: 20
      },
      size: {
        width: 15,
        height: 15
      },
      color: 'red'
    },
    {
      position: {
        x: 300,
        y: 20
      },
      size: {
        width: 15,
        height: 20
      },
      color: 'red'
    }
  ]

  constructor() { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!this.isGameStarted) {
      return;
    }

    if (event.key == 'ArrowRight') {
      // this.character.position.x += 10;
    } else if (event.key == 'ArrowLeft') {
      // this.character.position.x -= 10;
    } else if (event.key == 'ArrowDown') {
      // this.character.position.y -= 10;
    } else if (event.key == 'ArrowUp') {
      if (!this.isJumping) {
        this.animateJump();
      }
    }
  }

  ngOnInit(): void {
  }

  handleStartGame() {
    this.isGameStarted = true;
    this.score = 0;
    this.frameCount = 0;
    this.obstacleSpeed = 1;
    this.character.position.x = 120;

    for (const obstacle of this.obstacles) {
      obstacle.position.x = Math.random() * 500 + 500; // Randomize starting position
    }

    this.startGameLoop();
  }

  handleStopGame() {
    this.isGameStarted = false;

    if (this.score > this.highScore) {
      this.highScore = this.score;
    }

    if (this.gameLoopId) {
      cancelAnimationFrame(this.gameLoopId);
      this.gameLoopId = null;
    }
  }

  startGameLoop() {
    const loop = () => {
      if (!this.isGameStarted) {
        return;
      }

      for (const obstacle of this.obstacles) {
        obstacle.position.x -= this.obstacleSpeed;

        if (obstacle.position.x + obstacle.size.width < 0) {
          obstacle.position.x = 500 + Math.random() * 200; // Reset to right, randomize spacing
        }

        const collisionBuffer = 2;

        if (
          this.character.position.x + collisionBuffer < obstacle.position.x + obstacle.size.width &&
          this.character.position.x + this.character.size.width - collisionBuffer > obstacle.position.x &&
          this.character.position.y + collisionBuffer < obstacle.position.y + obstacle.size.height &&
          this.character.position.y + this.character.size.height - collisionBuffer > obstacle.position.y
        ) {
          alert('Game Over! Your score: ' + this.score);
          this.handleStopGame();
          return;
        }
      }


      this.frameCount++;

      if (this.frameCount % 10 === 0) {
        this.score += 1; // Increase score every 10 frames

        // increase speed every 200 points
        if (this.score % 200 === 0) {
          console.log('Increasing speed');
          this.obstacleSpeed += 0.5;
        }
      }

      this.gameLoopId = requestAnimationFrame(loop);
    };

    this.gameLoopId = requestAnimationFrame(loop);
  }

  animateJump() {
    this.isJumping = true;
    const startY = this.character.position.y;
    const jumpHeight = this.character.jumpHeight;
    const duration = this.character.jumpDuration;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const displacement = -4 * jumpHeight * progress * (progress - 1);
      this.character.position.y = startY + displacement;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.character.position.y = startY;
        this.isJumping = false;
      }
    };

    requestAnimationFrame(animate);
  }

}
