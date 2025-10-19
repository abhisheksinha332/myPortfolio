    pipeline {
        agent any 

        stages {
            stage('Pull Docker Image') {
                steps {
                    script {
                        // Pull an image from Docker Hub
                        docker.image('ubuntu:latest').pull() 

                        // Pull an image from a private registry (if credentials are set up)
                        // docker.withRegistry('https://myregistry.example.com', 'credentials-id') {
                        //     docker.image('my-private-image:1.0').pull()
                        // }
                    }
                }
            }
            stage('Use Docker Image') {
                steps {
                    script {
                        // You can then use this image to run containers
                        docker.image('ubuntu:latest').inside {
                            sh 'echo "Hello from inside the container!"'
                            sh 'ls -l /'
                        }
                    }
                }
            }
        }
    }