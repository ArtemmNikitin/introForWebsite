// получаем все блоки .intro-black-block
const blocks = document.querySelectorAll('.intro-black-block');
let currentBlock = 0;

// функция для показа текущего блока и скрытия предыдущего
function showBlock() {
	blocks[currentBlock].style.display = 'flex';

	// скрываем предыдущий блок
	const prevBlock = (currentBlock + blocks.length - 1) % blocks.length;
	blocks[prevBlock].style.display = 'none';

	// увеличиваем currentBlock для перехода к следующему блоку
	currentBlock = (currentBlock + 1) % blocks.length;
}

// показываем первый блок
showBlock();

// задаем интервал для смены блоков (в данном случае, каждые 1 секунды)
setInterval(showBlock, 1500);