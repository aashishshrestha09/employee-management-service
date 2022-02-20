pipeline {
    agent any
    tools {
        maven 'Maven-3.8.4'
    }

    stages {
        stage("Build") {
            steps {
                sh 'mvn employee-system-api/pom.file clean install -DskipTests'
            }
        }
        stage("Test") {
            steps {
                sh 'mvn employee-system-api/pom.file test'
            }
        }
        stage("Docker Build") {
            steps {
                sh 'docker-compose up'
            }
        }
    }
}