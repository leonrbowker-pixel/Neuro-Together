window.allCardsMasterData =[
                    { category: 'needs', icon: '🥤', label: 'Drink' },
                    { category: 'needs', icon: '🥪', label: 'Hungry' },
                    { category: 'needs', icon: '😴', label: 'Tired' },
                    { 
                        category: 'needs', 
                        icon: '🍼', 
                        label: 'Dummy',
                        iconHtml: `
                            <svg class="w-10 h-10 text-amber-500 mx-auto" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 28 C22 16, 42 16, 42 28 Z" fill="#FDE68A" stroke="#D97706" stroke-width="3"/>
                                <rect x="10" y="28" width="44" height="12" rx="6" fill="#38BDF8" stroke="#0284C7" stroke-width="3"/>
                                <circle cx="18" cy="34" r="2" fill="white"/>
                                <circle cx="46" cy="34" r="2" fill="white"/>
                                <path d="M24 40 C24 54, 40 54, 40 40" stroke="#0284C7" stroke-width="3.5" fill="none"/>
                            </svg>
                        `
                    },
                    { category: 'needs', icon: '🚽', label: 'Toilet' },
                    { category: 'needs', icon: '🩹', label: 'Hurt' },
                    { category: 'needs', icon: '🛁', label: 'Bath' },
                    { category: 'needs', icon: '👕', label: 'Clothes' },
                    { category: 'comfort', icon: '🛋️', label: 'Quiet Space' },
                    { category: 'comfort', icon: '🫂', label: 'Hug' },
                    { category: 'comfort', icon: '🎧', label: 'Headphones' },
                    { category: 'comfort', icon: '💆‍♂️', label: 'Deep Pressure' },
                    { category: 'comfort', icon: '🏃‍♂️', label: 'Need a Break' },
                    { category: 'answers', icon: '👍', label: 'Yes' },
                    { category: 'answers', icon: '👎', label: 'No' },
                    { category: 'answers', icon: '➕', label: 'More' },
                    { category: 'answers', icon: '✋', label: 'Stop' },
                    { category: 'answers', icon: '🏁', label: 'Finished' },
                    { category: 'answers', icon: '🙋‍♂️', label: 'Help' }
                ];
                 
                window.defaultScheduleMaster = [
                    { id: 1, icon: '☀️', name: 'Wake Up', done: false, essential: true },
                    { id: 2, icon: '👕', name: 'Get Dressed', done: false, essential: true },
                    { id: 3, icon: '🍳', name: 'Breakfast', done: false, essential: true },
                    { id: 4, icon: '🦷', name: 'Brush Teeth', done: false, essential: true }
                ];
                window.availableActivitiesMaster = [
                    { icon: '☀️', name: 'Wake Up', essential: true },
                    { icon: '👕', name: 'Get Dressed', essential: true },
                    { icon: '🍳', name: 'Breakfast', essential: true },
                    { icon: '🦷', name: 'Brush Teeth', essential: true },
                    { icon: '🚽', name: 'Toilet', essential: true },
                    { icon: '👟', name: 'Shoes & Coat', essential: false },
                    { icon: '🎒', name: 'School Run', essential: false },
                    { icon: '🛋️', name: 'Chill Out in Room', essential: true },
                    { icon: '🍎', name: 'Snack Time', essential: true },
                    { icon: '🧸', name: 'Free Play Time', essential: false },
                    { icon: '📚', name: 'Homework / Reading', essential: false },
                    { icon: '🧹', name: 'Tidy Up Toys', essential: false },
                    { icon: '🛁', name: 'Bath Time', essential: true },
                    { icon: '🌙', name: 'Bedtime Story', essential: true }
                ];

                window.nowNextPresetsMaster = [
                    { group: 'routine', icon: '👟', name: 'Shoes On' },
                    { group: 'routine', icon: '🧥', name: 'Coat On' },
                    { group: 'routine', icon: '👕', name: 'Get Dressed' },
                    { group: 'routine', icon: '🦷', name: 'Brush Teeth' },
                    { group: 'routine', icon: '🛁', name: 'Bath Time' },
                    { group: 'routine', icon: '🌙', name: 'Bed Time' },
                    { group: 'routine', icon: '🍳', name: 'Eat Meal' },
                    { group: 'routine', icon: '🚽', name: 'Toilet' },
                    { group: 'routine', icon: '🩳', name: 'Put Pyjamas On' },
                    { group: 'school', icon: '🚗', name: 'Car Journey' },
                    { group: 'school', icon: '🎒', name: 'Pack Bag' },
                    { group: 'school', icon: '🏫', name: 'Classroom' },
                    { group: 'school', icon: '🛒', name: 'Shops' },
                    { group: 'school', icon: '📚', name: 'Homework / Reading' },
                    { group: 'school', icon: '🩺', name: 'Doctor Visit' },
                    { group: 'school', icon: '🚶‍♂️', name: 'Walking Outside' },
                    { group: 'rewards', icon: '🛝', name: 'Park & Swings' },
                    { group: 'rewards', icon: '🎮', name: 'Gaming Time' },
                    { group: 'rewards', icon: '🍦', name: 'Ice Cream Treat' },
                    { group: 'rewards', icon: '🧩', name: 'LEGO Building' },
                    { group: 'rewards', icon: '📺', name: 'Favourite TV Programme' },
                    { group: 'rewards', icon: '🚲', name: 'Bike / Scooter Ride' },
                    { group: 'rewards', icon: '🎨', name: 'Arts, Crafts & Colouring' },
                    { group: 'rewards', icon: '🤸', name: 'Play On The Trampoline' },
                    { group: 'rewards', icon: '🍩', name: 'Bakery / Cafe Treat' },
                    { group: 'rewards', icon: '📖', name: 'Story with Parent' }
                ];