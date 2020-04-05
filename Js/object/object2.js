const hunter ={
    name: '사냥꾼',
    heroPower: '적 영웅에 2 데미지',
    hero: '렉사르'
};

const demonHunter = {
    name: '악마사냥꾼',
    heroPower: '영웅 공격력 1',
    hero: '일리단'
};

function print(job) {
    const { hero, name, heroPower} = job;
    const text = `하스스톤 영웅 ${hero}의 직업은 ${name}이고 영능은 ${heroPower} 입니다.`;
    console.log(text)
}

print(hunter);
print(demonHunter);