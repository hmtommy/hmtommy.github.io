document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://api.lanyard.rest/v1/users/1167072850465783891';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const statusText = document.getElementById('status-text');
            const activityText = document.getElementById('activity-text');
            const statusElement = document.querySelector('#status-text');

            if (data.data) {
                const activities = data.data.activities;
                const presence = data.data.discord_status;

                // Determine the status based on Discord presence
                switch (presence) {
                    case 'online':
                        statusElement.textContent = 'Online';
                        statusElement.className = 'online';
                        break;
                    case 'dnd':
                        statusElement.textContent = 'Do Not Disturb';
                        statusElement.className = 'dnd';
                        break;
                    case 'idle':
                        statusElement.textContent = 'Idle';
                        statusElement.className = 'idle';
                        break;
                    case 'offline':
                    default:
                        statusElement.textContent = 'Offline';
                        statusElement.className = 'offline';
                        break;
                }

                // Update activity information
                if (data.data.listening_to_spotify) {
                    activityText.textContent = `Listening to Spotify: ${data.data.listening_to_spotify.song} by ${data.data.listening_to_spotify.artist}`;
                } else if (activities.length > 0) {
                    const activity = activities[0];
                    activityText.textContent = `Playing: ${activity.name} ${activity.details ? `- ${activity.details}` : ''}`;
                } else {
                    activityText.textContent = '';
                }
            } else {
                statusElement.textContent = 'Error fetching status';
                statusElement.className = 'offline';
                activityText.textContent = '';
            }
        })
        .catch(error => {
            console.error('Error fetching data from Lanyard API:', error);
            const statusText = document.getElementById('status-text');
            const activityText = document.getElementById('activity-text');
            statusText.textContent = 'Error fetching status';
            statusText.className = 'offline';
            activityText.textContent = '';
        });
});
