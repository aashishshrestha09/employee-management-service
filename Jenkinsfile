pipeline {
    agent any
    tools {
        maven 'Maven-3.8.4'
    }

    stages {
        stage("Build") {
            steps {
                sh 'mvn -f employee-system-api/pom.xml clean install -DskipTests'
 
            }
        }
        stage("Test") {
            steps {
                sh 'mvn -f employee-system-api/pom.xml test'
                
            }
        }
        stage("Docker Build") {
            steps {
                sh 'docker-compose -f docker-compose.database.yaml -f docker-compose.backend.yml -f docker-compose.frontend.yml up -d'
            }
        }
    }
    post {
        always {
            sh "docker-compose -f docker-compose.database.yaml -f docker-compose.backend.yml -f docker-compose.frontend.yml down -v"
        }
    }
}
